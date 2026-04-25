# -*- coding: utf-8 -*-
"""
DevPro Portfolio Website - Assignment Report
Generates a professional PDF report with screenshots and descriptions.
"""

import os
from pathlib import Path
from datetime import date

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image,
    Table, TableStyle, HRFlowable, PageBreak, KeepTogether
)
from reportlab.platypus import ListFlowable, ListItem

# ── paths ──────────────────────────────────────────────────────────
ASSETS = Path("report_assets")
OUT_PDF = "IT-global-105_Boxodirov_Muxammadali_Assignment_Report.pdf"
STUDENT_NAME = "Boxodirov Muxammadali"
STUDENT_GROUP = "IT-global-105"
W, H = A4  # 595 x 842 pt

# ── colours ────────────────────────────────────────────────────────
INDIGO   = colors.HexColor("#6366f1")
CYAN     = colors.HexColor("#06b6d4")
DARK     = colors.HexColor("#0f172a")
SLATE    = colors.HexColor("#334155")
LIGHT_BG = colors.HexColor("#f8fafc")
WHITE    = colors.white
GREEN    = colors.HexColor("#22c55e")
AMBER    = colors.HexColor("#f59e0b")

# ── styles ─────────────────────────────────────────────────────────
BASE = getSampleStyleSheet()

def S(name, **kw):
    """Clone a base style with overrides."""
    s = BASE[name].clone(name + str(id(kw)))
    for k, v in kw.items():
        setattr(s, k, v)
    return s

TITLE_S   = S("Title",   fontSize=28, textColor=DARK,   spaceAfter=6,
               fontName="Helvetica-Bold", alignment=TA_CENTER)
SUB_S     = S("Normal",  fontSize=13, textColor=SLATE,  spaceAfter=4,
               alignment=TA_CENTER)
H1_S      = S("Heading1",fontSize=18, textColor=INDIGO, spaceBefore=14,
               spaceAfter=6, fontName="Helvetica-Bold")
H2_S      = S("Heading2",fontSize=14, textColor=DARK,   spaceBefore=10,
               spaceAfter=4, fontName="Helvetica-Bold")
BODY_S    = S("Normal",  fontSize=10, textColor=SLATE,  leading=16,
               spaceAfter=6, alignment=TA_JUSTIFY)
CAPTION_S = S("Normal",  fontSize=8,  textColor=colors.HexColor("#94a3b8"),
               spaceAfter=10, alignment=TA_CENTER, fontName="Helvetica-Oblique")
BOLD_S    = S("Normal",  fontSize=10, textColor=DARK,   fontName="Helvetica-Bold")
TAG_S     = S("Normal",  fontSize=9,  textColor=INDIGO, fontName="Helvetica-Bold",
               spaceAfter=2)
CODE_S    = S("Code",    fontSize=9,  textColor=colors.HexColor("#4f46e5"),
               backColor=colors.HexColor("#eef2ff"), leading=14)

# ── helpers ────────────────────────────────────────────────────────
def img(filename, width=None, caption=None):
    """Return [Image, caption_para] or empty list if file missing."""
    path = ASSETS / filename
    if not path.exists():
        return [Paragraph(f"[Screenshot: {filename} not found]", CAPTION_S)]

    from PIL import Image as PILImage
    with PILImage.open(path) as im:
        iw, ih = im.size

    max_w = width or (W - 4*cm)
    ratio = ih / iw
    final_w = min(max_w, W - 4*cm)
    final_h = final_w * ratio

    # cap height
    if final_h > 14*cm:
        final_h = 14*cm
        final_w = final_h / ratio

    items = [Image(str(path), width=final_w, height=final_h)]
    if caption:
        items.append(Paragraph(caption, CAPTION_S))
    return items

def hr():
    return HRFlowable(width="100%", thickness=1, color=colors.HexColor("#e2e8f0"),
                      spaceAfter=10, spaceBefore=4)

def badge(text, bg=INDIGO, fg=WHITE):
    data = [[Paragraph(f'<font color="white"><b>{text}</b></font>',
                       S("Normal", fontSize=9, alignment=TA_CENTER))]]
    t = Table(data, colWidths=[3.5*cm], rowHeights=[0.6*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), bg),
        ("ROUNDEDCORNERS", [4]),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ]))
    return t

def feature_row(items):
    """Two-column feature table."""
    rows = []
    for i in range(0, len(items), 2):
        left  = items[i]
        right = items[i+1] if i+1 < len(items) else ""
        rows.append([
            Paragraph(f"<b>+</b> {left}", BODY_S),
            Paragraph(f"<b>+</b> {right}" if right else "", BODY_S),
        ])
    t = Table(rows, colWidths=[(W-4*cm)/2]*2)
    t.setStyle(TableStyle([
        ("VALIGN", (0,0), (-1,-1), "TOP"),
        ("LEFTPADDING", (0,0), (-1,-1), 4),
    ]))
    return t

def info_box(title, body_text, bg=colors.HexColor("#eef2ff")):
    data = [
        [Paragraph(f"<b>{title}</b>", S("Normal", fontSize=11, textColor=INDIGO))],
        [Paragraph(body_text, BODY_S)],
    ]
    t = Table(data, colWidths=[W - 4*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (0,0), bg),
        ("BACKGROUND", (0,1), (0,1), colors.HexColor("#f8fafc")),
        ("BOX", (0,0), (-1,-1), 1, INDIGO),
        ("LEFTPADDING", (0,0), (-1,-1), 12),
        ("RIGHTPADDING", (0,0), (-1,-1), 12),
        ("TOPPADDING", (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LINEBELOW", (0,0), (0,0), 0.5, INDIGO),
    ]))
    return t

# ── COVER PAGE ─────────────────────────────────────────────────────
def cover_page():
    story = []

    # top gradient bar (fake with coloured table)
    bar_data = [[""]]
    bar = Table(bar_data, colWidths=[W - 2*cm], rowHeights=[0.5*cm])
    bar.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1), INDIGO)]))
    story += [Spacer(1, 1.5*cm), bar, Spacer(1, 1.5*cm)]

    # Student info block at the very top of cover
    student_info_data = [[
        Paragraph(
            "<b>IT-global-105</b>  |  Student: <b>Boxodirov Muxammadali</b>  |  "
            "Assignment #7: <b>Working with no-coding platforms for web development</b>",
            S("Normal", fontSize=10, textColor=WHITE, alignment=TA_CENTER)
        )
    ]]
    student_bar = Table(student_info_data, colWidths=[W - 2*cm], rowHeights=[1*cm])
    student_bar.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,-1), SLATE),
        ("ALIGN",         (0,0), (-1,-1), "CENTER"),
        ("VALIGN",        (0,0), (-1,-1), "MIDDLE"),
        ("LEFTPADDING",   (0,0), (-1,-1), 12),
        ("RIGHTPADDING",  (0,0), (-1,-1), 12),
        ("TOPPADDING",    (0,0), (-1,-1), 4),
        ("BOTTOMPADDING", (0,0), (-1,-1), 4),
    ]))
    story += [student_bar, Spacer(1, 0.8*cm)]

    story.append(Paragraph("DevPro", TITLE_S))
    story.append(Paragraph("Professional Freelancer Portfolio Website", SUB_S))
    story.append(Spacer(1, 0.4*cm))

    # accent line
    accent = Table([[""]], colWidths=[6*cm], rowHeights=[3])
    accent.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1), CYAN)]))
    story.append(KeepTogether([accent]))
    story.append(Spacer(1, 1.5*cm))

    # Cover info table
    today = date.today().strftime("%B %d, %Y")
    info = [
        ["Student:",        STUDENT_NAME],
        ["Group:",          STUDENT_GROUP],
        ["Assignment #:",   "7 — Working with no-coding platforms for web development"],
        ["Assignment Type:", "Web Development Project Report"],
        ["Project Name:",    "DevPro — Freelancer Portfolio Website"],
        ["Live URL:",        "https://devpro-web.netlify.app/"],
        ["Technologies:",    "React 19 · Vite 7 · Tailwind CSS v4 · Framer Motion"],
        ["Telegram Bot:",    "@DevPro_bot  (Order Management System)"],
        ["Admin Channel:",   "@DevPro_admin"],
        ["Date:",            today],
        ["Language:",        "Uzbek (UZ) · Russian (RU) · English (EN)"],
    ]
    tbl = Table(info, colWidths=[4.5*cm, W - 4*cm - 4.5*cm])
    tbl.setStyle(TableStyle([
        ("FONTNAME",  (0,0), (0,-1), "Helvetica-Bold"),
        ("FONTSIZE",  (0,0), (-1,-1), 10),
        ("TEXTCOLOR", (0,0), (0,-1), INDIGO),
        ("TEXTCOLOR", (1,0), (1,-1), SLATE),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [colors.HexColor("#f1f5f9"), WHITE]),
        ("TOPPADDING",    (0,0), (-1,-1), 7),
        ("BOTTOMPADDING", (0,0), (-1,-1), 7),
        ("LEFTPADDING",   (0,0), (-1,-1), 10),
    ]))
    story += [tbl, Spacer(1, 1.5*cm)]

    # Summary paragraph
    story.append(info_box(
        "Project Summary",
        "This report documents the design, development, and deployment of DevPro — a "
        "fully responsive freelancer portfolio website built with the latest web technologies. "
        "The project includes a multi-language interface (UZ/RU/EN), dark/light theme toggle, "
        "animated UI components, and a Telegram-based order management bot that replaces the "
        "traditional Excel-style request form. The website is deployed live on Netlify at "
        "https://devpro-web.netlify.app/."
    ))

    story.append(PageBreak())
    return story

# ── TABLE OF CONTENTS ──────────────────────────────────────────────
def toc_page():
    story = [Paragraph("Table of Contents", H1_S), hr(), Spacer(1, 0.3*cm)]
    sections = [
        ("1.", "Project Overview & Technology Stack"),
        ("2.", "Website Sections — Screenshots & Descriptions"),
        ("  2.1", "Hero Section"),
        ("  2.2", "About Section"),
        ("  2.3", "Services Section"),
        ("  2.4", "Pricing Section"),
        ("  2.5", "Work Process Section"),
        ("  2.6", "Projects Portfolio"),
        ("  2.7", "Client Testimonials"),
        ("  2.8", "FAQ Section"),
        ("  2.9", "Contact Section"),
        ("  2.10", "Footer"),
        ("3.", "Key Features"),
        ("  3.1", "Dark / Light Mode Toggle"),
        ("  3.2", "Multi-language Support (UZ / RU / EN)"),
        ("  3.3", "Responsive Design — Mobile View"),
        ("4.", "Telegram Bot Integration"),
        ("  4.1", "Bot Functionality & User Flow"),
        ("  4.2", "Admin Notification System"),
        ("  4.3", "Order Tracking in Admin Group"),
        ("5.", "Security & Performance"),
        ("6.", "Deployment — Netlify"),
        ("7.", "Conclusion"),
    ]
    for num, title in sections:
        indent = 20 if num.startswith(" ") else 0
        style = S("Normal", fontSize=10, textColor=SLATE if indent else DARK,
                  leftIndent=indent, spaceAfter=4,
                  fontName="Helvetica" if indent else "Helvetica-Bold")
        story.append(Paragraph(f"{num.strip()}  {title}", style))
    story.append(PageBreak())
    return story

# ── SECTION 1: TECH STACK ──────────────────────────────────────────
def tech_stack():
    story = [Paragraph("1. Project Overview & Technology Stack", H1_S), hr()]

    story.append(Paragraph(
        "DevPro is a modern freelancer portfolio website created to showcase IT services "
        "including Telegram bot development, web applications, Android apps, e-commerce "
        "solutions, Telegram Stars and Premium integrations. The site targets clients in "
        "Central Asia and supports three languages.", BODY_S))
    story.append(Spacer(1, 0.3*cm))

    # Tech table
    story.append(Paragraph("Technology Stack", H2_S))
    tech = [
        ["Category",       "Technology",         "Version",  "Purpose"],
        ["Frontend",       "React",               "19.x",     "UI component library"],
        ["Build Tool",     "Vite",                "7.x",      "Fast dev server & bundler"],
        ["Styling",        "Tailwind CSS",        "v4",       "Utility-first CSS framework"],
        ["Animations",     "Framer Motion",       "12.x",     "Smooth UI animations"],
        ["Icons",          "Lucide React",        "Latest",   "SVG icon library"],
        ["Language",       "JavaScript (ES2024)", "—",        "Primary language"],
        ["Hosting",        "Netlify",             "—",        "Free CDN deployment"],
        ["Bot Platform",   "Telegram Bot API",    "Latest",   "Order management system"],
        ["Notifications",  "Telegram Groups",     "—",        "Admin order notifications"],
    ]
    t = Table(tech, colWidths=[3*cm, 4.5*cm, 2.5*cm, W-4*cm-3*cm-4.5*cm-2.5*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND",    (0,0), (-1,0), INDIGO),
        ("TEXTCOLOR",     (0,0), (-1,0), WHITE),
        ("FONTNAME",      (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE",      (0,0), (-1,-1), 9),
        ("ROWBACKGROUNDS",(0,1), (-1,-1), [WHITE, colors.HexColor("#f1f5f9")]),
        ("GRID",          (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ("TOPPADDING",    (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING",   (0,0), (-1,-1), 8),
    ]))
    story += [t, Spacer(1, 0.4*cm)]

    story.append(info_box(
        "Why this stack?",
        "React + Vite provides a fast, component-based architecture ideal for a portfolio. "
        "Tailwind CSS v4 enables rapid styling without leaving JSX. Framer Motion handles "
        "all entrance animations, hover effects, and page transitions. The static site "
        "approach means zero server costs — the entire site is deployed as pre-built files "
        "on Netlify's global CDN, giving sub-second load times worldwide."
    ))
    story.append(PageBreak())
    return story

# ── SECTION 2: WEBSITE SECTIONS ───────────────────────────────────
def website_sections():
    story = [Paragraph("2. Website Sections — Screenshots & Descriptions", H1_S), hr()]

    sections_data = [
        ("2.1", "Hero Section", "01_hero.png",
         "The Hero section is the first thing visitors see. It features a large animated "
         "heading ('G\\'oyangizni Haqiqatga Aylantiraman' — 'I Turn Your Ideas Into Reality'), "
         "a typing animation that cycles through the main services (Telegram Bots, Websites, "
         "Android Apps, E-Commerce), a subtitle, two CTA buttons (Order a Project / Services), "
         "and four animated statistics cards showing 50+ projects, 30+ happy clients, 3+ years "
         "experience, and 24/7 support. Floating tech icons animate in the background on desktop."),

        ("2.2", "About Section", "02_about.png",
         "The About section introduces the developer with a personal bio highlighting 3+ years "
         "of experience in Telegram bots, web apps, and Android development. Four feature cards "
         "emphasise key selling points: Fast Delivery, Quality Guarantee, 24/7 Contact, and "
         "Clean Code. A skills panel on the right shows animated progress bars for Python (95%), "
         "JavaScript (90%), React (88%), Node.js (85%), Telegram API (95%), PostgreSQL (82%), "
         "React Native (80%), and Tailwind CSS (90%)."),

        ("2.3", "Services Section", "03_services.png",
         "Six service cards are displayed in a responsive 3-column grid. Each card shows an "
         "icon, title, description, 4 feature bullet points, and a 'Learn More' link. Services: "
         "Telegram Bot, Web Sites, Android Apps, Telegram Stars, Telegram Premium, E-Commerce. "
         "An extra services banner at the bottom mentions SEO, UI/UX design, API integration, "
         "and server setup."),

        ("2.4", "Pricing Section", "04_pricing.png",
         "Three pricing tiers are displayed side-by-side. Starter ($50+) covers simple bots "
         "and landing pages with 7-day support. Professional ($150+) is the most popular tier "
         "(highlighted with a glowing border and 'Popular' badge) covering complex bots, "
         "multi-page sites, admin panels, and 30-day support. Enterprise (Negotiable) covers "
         "any complexity including Android + Bot + Web combos with 60-day support. A note "
         "clarifies that all prices are starting prices."),

        ("2.5", "Work Process Section", "05_process.png",
         "A 4-step timeline explains how projects work: Step 01 — Reach Out (contact via "
         "Telegram, free consultation, 1 hour); Step 02 — Analysis & Price (project review "
         "and quote, 1 day); Step 03 — Development (immediate start, progress updates, "
         "1-10 days); Step 04 — Delivery (tested and delivered with 30-day free warranty). "
         "Connector lines link the steps on desktop view."),

        ("2.6", "Projects Portfolio", "06_projects.png",
         "Six project showcase cards are arranged in a 3-column grid. Each card has a "
         "gradient header with an icon, project title, description, and technology tags. "
         "Projects include: E-Commerce Telegram Bot (Python/PostgreSQL), Business Landing "
         "Page (React/Tailwind), Taxi Ordering Bot (Node.js/MongoDB), Movie Search Bot "
         "(Python/API), CRM Web App (React/Node.js), and Android Messenger (React Native/Firebase)."),

        ("2.7", "Client Testimonials", "07_testimonials.png",
         "Four 5-star client reviews are shown in a 2-column grid. Each card displays the "
         "star rating, review quote, client name, and their role. Reviews come from an online "
         "store owner, a marketing specialist, a startup founder, and a taxi service manager — "
         "all praising speed, quality, and professionalism."),

        ("2.8", "FAQ Section", "08_faq.png",
         "An accordion-style FAQ section answers 6 common questions: delivery time (1-2 days "
         "for simple, 5-10 for complex), how pricing works ($50+ for bots, $80+ for sites, "
         "$200+ for apps), payment method (50/50 split), post-delivery support (30 days free), "
         "source code ownership (yes, full ownership), and satisfaction guarantee (free revisions)."),

        ("2.9", "Contact Section", "09_contact.png",
         "Two contact cards let visitors reach the developer: a direct Telegram message card "
         "(@DevPro_admin) and a Telegram bot card for automated ordering. A copy-to-clipboard "
         "button copies the username. On the right, an info card reinforces 4 trust points: "
         "Fast Results, Security, Constant Communication, and Free Fixes, with a large 'Write "
         "Now!' CTA button linking directly to Telegram."),

        ("2.10", "Footer", "10_footer.png",
         "The footer contains the DevPro logo, all navigation links, a back-to-top arrow "
         "button, and a copyright notice. The design is minimal and matches the overall dark "
         "aesthetic. The footer uses a subtle top border separator."),
    ]

    for num, title, img_file, desc in sections_data:
        story.append(Paragraph(f"{num}  {title}", H2_S))
        story += img(img_file, caption=f"Figure — {title}")
        story.append(Paragraph(desc, BODY_S))
        story.append(Spacer(1, 0.3*cm))

    story.append(PageBreak())
    return story

# ── SECTION 3: KEY FEATURES ────────────────────────────────────────
def key_features():
    story = [Paragraph("3. Key Features", H1_S), hr()]

    # 3.1 Dark/Light Mode
    story.append(Paragraph("3.1  Dark / Light Mode Toggle", H2_S))
    story.append(Paragraph(
        "A theme toggle button (Sun/Moon icon) in the top-right navbar allows visitors to "
        "switch between dark and light mode. The preference is saved in localStorage so it "
        "persists across page reloads. The transition is smooth (0.4s CSS transition on all "
        "background and text colours). The light theme uses a clean white/slate palette while "
        "the dark theme uses deep navy (#0f172a) as the base.", BODY_S))
    story += img("11_light_mode.png", caption="Figure — Light mode activated")
    story.append(Spacer(1, 0.3*cm))

    # 3.2 Language
    story.append(Paragraph("3.2  Multi-language Support (UZ / RU / EN)", H2_S))
    story.append(Paragraph(
        "A language switcher dropdown in the navbar (showing O'Z / Ru / En) allows switching "
        "between Uzbek, Russian, and English. All text content — navigation, hero, about, "
        "services, pricing, process, testimonials, FAQ, and contact — is fully translated in "
        "all three languages. Language preference is also saved in localStorage. The "
        "implementation uses React Context (LanguageContext) with a custom useTranslation hook.",
        BODY_S))
    story += img("12_lang_switcher.png", caption="Figure — Language switcher open (O'Z selected)")
    story.append(Spacer(1, 0.3*cm))

    # 3.3 Responsive
    story.append(Paragraph("3.3  Responsive Design — Mobile View", H2_S))
    story.append(Paragraph(
        "The website is fully responsive across all screen sizes: 320px (small phones), "
        "375px (iPhone), 768px (tablet), 1024px (laptop), 1280px+ (desktop). Key responsive "
        "behaviours: the navigation collapses to a hamburger menu below 1024px, grids shift "
        "from 3-column to 2-column to 1-column, font sizes scale down gracefully, and all "
        "horizontal overflow is prevented with overflow-x: hidden on html/body.", BODY_S))
    story += img("13_mobile.png", width=6*cm, caption="Figure — Mobile view (375px)")
    story.append(PageBreak())
    return story

# ── SECTION 4: TELEGRAM BOT ────────────────────────────────────────
def telegram_bot():
    story = [Paragraph("4. Telegram Bot Integration", H1_S), hr()]

    story.append(Paragraph(
        "The website includes a fully functional Telegram bot order management system. "
        "Instead of using a traditional Excel or Google Form submission process, visitors "
        "can click the 'Order Bot' button on the website and submit their request directly "
        "through Telegram. The bot handles the complete order flow from first contact to "
        "admin notification.", BODY_S))

    # 4.1 Bot flow
    story.append(Paragraph("4.1  Bot Functionality & User Flow", H2_S))
    story.append(Paragraph(
        "When a user sends /start to the bot, they are greeted with a welcome message and "
        "presented with a service selection keyboard. The bot guides users through:", BODY_S))

    steps = [
        "Welcome message with company name and available services listed",
        "Service selection keyboard: Telegram Bot | Web Sayt | Mobil Ilova | Taklif | Shikoyat",
        "After selecting a service, the user is asked to describe their project (minimum 10 characters)",
        "An optional 'additional info' field for extra details",
        "Confirmation message: 'Your request has been accepted!' with an order number",
        "The bot then waits for the next request via the main menu",
        "Language switcher button available: 'Tilni o\\'zgartirish' (Change Language)",
    ]
    for s in steps:
        story.append(Paragraph(f"  \u2022  {s}", BODY_S))
    story.append(Spacer(1, 0.2*cm))

    # Bot screenshot description box
    story.append(info_box(
        "Bot Screenshot — User Interaction (from provided screenshots)",
        "The screenshot shows a real interaction: user sends /start, bot responds with "
        "welcome message listing services (Telegram bots, Web sites, Mobile apps). "
        "User selects 'Web Sayt', bot asks for project description, user writes "
        "'menga sun\\'iy intellekt bilan ishlay oladigan chat bot kerak' (I need an AI "
        "chatbot). Bot confirms: 'Murojaatingiz qabul qilindi! Murojaat raqami: #4 "
        "Turi: Web Sayt' — Order #4, Type: Web Site accepted."
    ))
    story.append(Spacer(1, 0.4*cm))

    # 4.2 Admin notification
    story.append(Paragraph("4.2  Admin Notification System", H2_S))
    story.append(Paragraph(
        "The Telegram admin channel (@DevPro_admin) is the developer's personal Telegram "
        "account. When a client contacts via the website's 'Message' button, they are "
        "redirected directly to this channel. The admin account is always online and "
        "responds quickly to client inquiries.", BODY_S))

    story.append(info_box(
        "Admin Channel — @DevPro_admin (from provided screenshots)",
        "The admin Telegram profile page (t.me/DevPro_admin) shows the business contact "
        "with the message 'Iltimos sabrli bo\\'ling, tez orada javob beramiz' (Please be "
        "patient, we will reply soon). Clients can send a message directly through the "
        "Telegram web interface or app."
    ))
    story.append(Spacer(1, 0.4*cm))

    # 4.3 Admin group
    story.append(Paragraph("4.3  Order Tracking in Admin Group (DevPro zayafka)", H2_S))
    story.append(Paragraph(
        "All bot orders are automatically forwarded to a private Telegram group called "
        "'DevPro zayafka' (DevPro Orders). This group has 3 members:", BODY_S))

    members = [
        ("Admin",     "The developer's personal account — receives and manages all orders"),
        ("#_Alii",    "Group owner — the business owner"),
        ("DevPro bot","The automated bot — posts order notifications to the group"),
    ]
    for name, role in members:
        story.append(Paragraph(f"  <b>{name}</b> — {role}", BODY_S))
    story.append(Spacer(1, 0.2*cm))

    story.append(Paragraph(
        "Each order notification sent to the admin group contains the following structured data:",
        BODY_S))

    fields = [
        ("Order Number",  "Sequential number e.g. #4, #3, #2"),
        ("Name",          "Client's full name from their Telegram profile"),
        ("Phone",         "Client's phone number (if registered in Telegram)"),
        ("Telegram",      "Client's @username for direct reply"),
        ("User ID",       "Unique Telegram user ID"),
        ("Service Type",  "Which service was selected (Web Sayt, Mobil Ilova, etc.)"),
        ("Description",   "Project description written by the client"),
        ("Extra Info",    "Any additional notes the client provided"),
        ("Timestamp",     "Date and time of the order"),
    ]
    t = Table(fields, colWidths=[4*cm, W - 4*cm - 4*cm])
    t.setStyle(TableStyle([
        ("FONTNAME",   (0,0), (0,-1), "Helvetica-Bold"),
        ("FONTSIZE",   (0,0), (-1,-1), 9),
        ("TEXTCOLOR",  (0,0), (0,-1), INDIGO),
        ("TEXTCOLOR",  (1,0), (1,-1), SLATE),
        ("ROWBACKGROUNDS",(0,0),(-1,-1),[WHITE, colors.HexColor("#f1f5f9")]),
        ("GRID",       (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ("TOPPADDING", (0,0), (-1,-1), 5),
        ("BOTTOMPADDING",(0,0),(-1,-1), 5),
        ("LEFTPADDING",(0,0), (-1,-1), 8),
    ]))
    story += [t, Spacer(1, 0.4*cm)]

    story.append(info_box(
        "Real Orders from Admin Group (from provided screenshots)",
        "Order #2 (2026-03-03): Admin tested the bot — service: Mobil Ilova, "
        "description: 'menga web sayt kerak kompaniyam uchun'. "
        "Order #3 (2026-03-16): Client Ali (ID: 7096686583, @its_aliiy) — "
        "service: Web Sayt, description: 'nimaudr yaratmiz', extra: 'ixtorlar qilamiz'. "
        "Order #4 (2026-04-17): Client requested an AI-powered chatbot via Web Sayt service. "
        "All orders are timestamped and contain full client contact details for easy follow-up."
    ))

    story.append(PageBreak())
    return story

# ── SECTION 5: SECURITY ────────────────────────────────────────────
def security():
    story = [Paragraph("5. Security & Performance", H1_S), hr()]

    story.append(Paragraph("Security Measures", H2_S))
    sec_items = [
        ("Static Site Architecture",
         "No backend server means no SQL injection, no server-side vulnerabilities. "
         "The entire site is pre-built HTML/CSS/JS files served from a CDN."),
        ("Content Security Policy (CSP)",
         "HTTP headers configured in vite.config.js restrict which resources can load, "
         "preventing XSS attacks."),
        ("X-Frame-Options: DENY",
         "Prevents the site from being embedded in iframes, protecting against clickjacking."),
        ("HSTS (HTTP Strict Transport Security)",
         "Forces HTTPS connections, preventing man-in-the-middle attacks."),
        ("Referrer-Policy: strict-origin-when-cross-origin",
         "Controls referrer information sent with requests."),
        ("No Sensitive Data Exposure",
         "No API keys, passwords, or tokens are stored in the frontend code. "
         "All Telegram bot logic runs server-side."),
    ]
    for title, desc in sec_items:
        story.append(Paragraph(f"<b>{title}</b>", BOLD_S))
        story.append(Paragraph(desc, BODY_S))

    story.append(Paragraph("Performance Optimisations", H2_S))
    perf_items = [
        "Vite's tree-shaking removes unused code from production bundle",
        "Lazy loading for below-fold sections via Framer Motion's useInView hook",
        "Optimised image rendering with CSS blur effects instead of heavy images",
        "Tailwind CSS v4 purges all unused CSS classes — final CSS: 46 KB",
        "Total JS bundle: 396 KB (123 KB gzipped) — fast load even on 3G",
        "Global CDN via Netlify ensures <100ms TTFB for users in Central Asia",
    ]
    for item in perf_items:
        story.append(Paragraph(f"  \u2022  {item}", BODY_S))

    story.append(PageBreak())
    return story

# ── SECTION 6: DEPLOYMENT ──────────────────────────────────────────
def deployment():
    story = [Paragraph("6. Deployment — Netlify", H1_S), hr()]

    story.append(Paragraph(
        "The website is deployed on Netlify's free tier at:", BODY_S))
    story.append(Paragraph(
        "https://devpro-web.netlify.app/",
        S("Normal", fontSize=12, textColor=INDIGO, fontName="Helvetica-Bold",
          spaceAfter=10, alignment=TA_CENTER)))

    story.append(Paragraph("Deployment Process", H2_S))
    deploy_steps = [
        ("Build Command", "npm run build  (runs vite build)"),
        ("Output Directory", "dist/"),
        ("Build Time", "~3 seconds"),
        ("Bundle Size", "396 KB JS + 46 KB CSS (gzipped: 130 KB total)"),
        ("CDN", "Netlify global edge network (100+ locations worldwide)"),
        ("SSL Certificate", "Automatic free HTTPS via Let's Encrypt"),
        ("Custom Domain", "Can connect any purchased domain for free"),
        ("Deploy Trigger", "Manual upload or GitHub auto-deploy on push"),
    ]
    t = Table(deploy_steps, colWidths=[4.5*cm, W - 4*cm - 4.5*cm])
    t.setStyle(TableStyle([
        ("FONTNAME",   (0,0), (0,-1), "Helvetica-Bold"),
        ("FONTSIZE",   (0,0), (-1,-1), 10),
        ("TEXTCOLOR",  (0,0), (0,-1), INDIGO),
        ("ROWBACKGROUNDS",(0,0),(-1,-1),[WHITE, colors.HexColor("#f1f5f9")]),
        ("GRID",       (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ("TOPPADDING", (0,0), (-1,-1), 7),
        ("BOTTOMPADDING",(0,0),(-1,-1),7),
        ("LEFTPADDING",(0,0), (-1,-1), 10),
    ]))
    story += [t, Spacer(1, 0.4*cm)]

    story.append(info_box(
        "Why Netlify (Free Hosting)?",
        "Netlify earns revenue through its paid plans for teams and enterprises ($20-$400/month). "
        "The free tier serves as a funnel — developers use it for personal projects, "
        "then upgrade when they need team features, serverless functions, or higher bandwidth. "
        "For a static portfolio site like DevPro, the free tier is more than sufficient: "
        "100 GB bandwidth/month, unlimited sites, automatic HTTPS, and global CDN included."
    ))
    story.append(PageBreak())
    return story

# ── SECTION 7: CONCLUSION ──────────────────────────────────────────
def conclusion():
    story = [Paragraph("7. Conclusion", H1_S), hr()]

    story.append(Paragraph(
        "The DevPro Freelancer Portfolio Website successfully demonstrates a complete, "
        "production-ready web application built with modern technologies. The project achieves "
        "all its stated goals:", BODY_S))

    goals = [
        ("Professional Design",
         "Glassmorphism UI, gradient accents, smooth Framer Motion animations, "
         "and a clean dark/light theme create a visually striking first impression."),
        ("Full Responsiveness",
         "The site works flawlessly on all screen sizes from 320px mobile phones "
         "to 1440px+ desktops with no horizontal scrolling."),
        ("Multi-language Support",
         "Three complete languages (Uzbek, Russian, English) with persistent preferences "
         "make the site accessible to a wider Central Asian audience."),
        ("Integrated Order System",
         "The Telegram bot provides a seamless order pipeline from website visitor "
         "to admin notification, with structured data and order numbering."),
        ("Free Deployment",
         "The site is live on Netlify at zero ongoing cost, with automatic HTTPS "
         "and global CDN performance."),
        ("Security",
         "Static architecture with CSP headers, HSTS, and no sensitive data "
         "exposure provides strong security without a backend."),
    ]
    for title, desc in goals:
        story.append(Paragraph(f"<b>{title}:</b> {desc}", BODY_S))

    story.append(Spacer(1, 0.5*cm))
    story.append(Paragraph(
        "This project serves as both a functional portfolio for attracting freelance clients "
        "and a demonstration of modern full-stack web development skills including React "
        "component architecture, state management with Context API, CSS design systems, "
        "animation libraries, bot development, and cloud deployment.", BODY_S))

    story.append(Spacer(1, 1*cm))
    story.append(hr())
    story.append(Paragraph(
        "Live website: https://devpro-web.netlify.app/ | "
        "Telegram: @DevPro_admin | Bot: @DevPro_bot",
        S("Normal", fontSize=9, textColor=colors.HexColor("#94a3b8"), alignment=TA_CENTER)
    ))
    return story

# ── BUILD PDF ──────────────────────────────────────────────────────
def build_pdf():
    doc = SimpleDocTemplate(
        OUT_PDF,
        pagesize=A4,
        leftMargin=2*cm, rightMargin=2*cm,
        topMargin=2*cm, bottomMargin=2*cm,
        title="DevPro Portfolio Assignment Report",
        author=STUDENT_NAME,
        subject=f"Web Development Project Report — {STUDENT_GROUP}",
    )

    story = []
    story += cover_page()
    story += toc_page()
    story += tech_stack()
    story += website_sections()
    story += key_features()
    story += telegram_bot()
    story += security()
    story += deployment()
    story += conclusion()

    doc.build(story)
    print(f"PDF saved: {OUT_PDF}")
    size_mb = os.path.getsize(OUT_PDF) / (1024*1024)
    print(f"File size: {size_mb:.2f} MB")

if __name__ == "__main__":
    build_pdf()
