"""
DevPro Portfolio Website - Assignment Report Generator
Takes screenshots from the live site and compiles a PDF report.
"""

import asyncio
import os
import sys
from pathlib import Path
from playwright.async_api import async_playwright

# ── Output dirs ──────────────────────────────────────────────────
OUT = Path("report_assets")
OUT.mkdir(exist_ok=True)

SITE_URL = "http://localhost:8889"

async def take_screenshots():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        ctx = await browser.new_context(
            viewport={"width": 1280, "height": 800},
            device_scale_factor=1,
        )
        page = await ctx.new_page()
        await page.goto(SITE_URL, wait_until="networkidle")
        await page.wait_for_timeout(2000)   # let animations settle

        shots = {}

        # 1. Hero – full hero section
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=str(OUT / "01_hero.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["hero"] = str(OUT / "01_hero.png")
        print("✓ Hero screenshot")

        # 2. About
        await page.evaluate("document.getElementById('about').scrollIntoView()")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "02_about.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["about"] = str(OUT / "02_about.png")
        print("✓ About screenshot")

        # 3. Services
        await page.evaluate("document.getElementById('services').scrollIntoView()")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "03_services.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["services"] = str(OUT / "03_services.png")
        print("✓ Services screenshot")

        # 4. Pricing
        await page.evaluate("document.getElementById('pricing').scrollIntoView()")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "04_pricing.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["pricing"] = str(OUT / "04_pricing.png")
        print("✓ Pricing screenshot")

        # 5. Work Process (no id – scroll after pricing)
        await page.evaluate("window.scrollBy(0, 900)")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "05_process.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["process"] = str(OUT / "05_process.png")
        print("✓ Process screenshot")

        # 6. Projects
        await page.evaluate("document.getElementById('projects').scrollIntoView()")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "06_projects.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["projects"] = str(OUT / "06_projects.png")
        print("✓ Projects screenshot")

        # 7. Testimonials (scroll past projects)
        await page.evaluate("window.scrollBy(0, 900)")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "07_testimonials.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["testimonials"] = str(OUT / "07_testimonials.png")
        print("✓ Testimonials screenshot")

        # 8. FAQ
        await page.evaluate("window.scrollBy(0, 900)")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "08_faq.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["faq"] = str(OUT / "08_faq.png")
        print("✓ FAQ screenshot")

        # 9. Contact
        await page.evaluate("document.getElementById('contact').scrollIntoView()")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(OUT / "09_contact.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["contact"] = str(OUT / "09_contact.png")
        print("✓ Contact screenshot")

        # 10. Footer
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(800)
        await page.screenshot(path=str(OUT / "10_footer.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["footer"] = str(OUT / "10_footer.png")
        print("✓ Footer screenshot")

        # 11. Light mode
        await page.evaluate("window.scrollTo(0,0)")
        theme_btn = page.locator('button[aria-label="Toggle theme"]')
        await theme_btn.click()
        await page.wait_for_timeout(800)
        await page.screenshot(path=str(OUT / "11_light_mode.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["light"] = str(OUT / "11_light_mode.png")
        print("✓ Light mode screenshot")

        # 12. Language switcher
        lang_btn = page.locator('button').filter(has_text="O'Z").first
        await lang_btn.click()
        await page.wait_for_timeout(400)
        await page.screenshot(path=str(OUT / "12_lang_switcher.png"), clip={"x":0,"y":0,"width":1280,"height":800})
        shots["lang"] = str(OUT / "12_lang_switcher.png")
        print("✓ Language switcher screenshot")

        # 13. Mobile view – 375px
        await browser.close()
        browser2 = await p.chromium.launch(headless=True)
        ctx2 = await browser2.new_context(viewport={"width":375,"height":812})
        page2 = await ctx2.new_page()
        await page2.goto(SITE_URL, wait_until="networkidle")
        await page2.wait_for_timeout(2000)
        await page2.screenshot(path=str(OUT / "13_mobile.png"), clip={"x":0,"y":0,"width":375,"height":812})
        shots["mobile"] = str(OUT / "13_mobile.png")
        print("✓ Mobile screenshot")
        await browser2.close()

        return shots

asyncio.run(take_screenshots())
print("\nAll screenshots saved to report_assets/")
