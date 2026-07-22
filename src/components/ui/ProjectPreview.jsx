import { Send, Lock } from 'lucide-react';

// Hand-crafted mini-mockups for project previews.
// Websites → tiny browser window with domain + skeleton layout.
// Telegram bots → tiny chat window with bubbles + inline keyboard.
// `color` is the project's tailwind gradient (from-... to-...).

const domainOf = (link) => link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const isBot = (link) => link.includes('t.me/');
const handleOf = (link) => '@' + link.split('t.me/')[1];

function Bar({ w, h = 'h-1.5', className = '' }) {
  return <div className={`${h} rounded-full bg-line-strong/60 ${className}`} style={{ width: w }} />;
}

function SiteMock({ project }) {
  return (
    <div>
      {/* browser chrome */}
      <div className="hairline-b flex items-center gap-2 bg-bg-soft px-3.5 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </span>
        <span className="hairline ml-1 flex flex-1 items-center gap-1.5 rounded-full bg-bg px-3 py-1">
          <Lock className="h-2.5 w-2.5 text-muted" />
          <span className="font-mono text-[10px] font-medium text-ink-soft">{domainOf(project.link)}</span>
        </span>
      </div>

      {/* page skeleton */}
      <div className="relative overflow-hidden p-4">
        <div
          className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${project.color} opacity-25 blur-2xl`}
        />
        {/* nav */}
        <div className="flex items-center justify-between">
          <span className={`flex h-4 w-4 items-center justify-center rounded-md bg-gradient-to-br ${project.color}`}>
            <project.icon className="h-2.5 w-2.5 text-white" />
          </span>
          <span className="flex items-center gap-2">
            <Bar w="18px" h="h-1" />
            <Bar w="24px" h="h-1" />
            <Bar w="18px" h="h-1" />
            <span className={`h-3.5 w-9 rounded-full bg-gradient-to-r ${project.color} opacity-80`} />
          </span>
        </div>
        {/* hero */}
        <div className="mt-4">
          <Bar w="72%" h="h-2.5" className="!bg-ink/70" />
          <div className={`mt-1.5 h-2.5 w-[52%] rounded-full bg-gradient-to-r ${project.color}`} />
          <Bar w="84%" h="h-1.5" className="mt-2.5 opacity-70" />
          <Bar w="64%" h="h-1.5" className="mt-1 opacity-70" />
          <div className="mt-3 flex items-center gap-2">
            <span className={`h-4 w-14 rounded-full bg-gradient-to-r ${project.color}`} />
            <span className="hairline h-4 w-11 rounded-full" />
          </div>
        </div>
        {/* cards row */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((k) => (
            <div key={k} className="hairline rounded-lg p-2">
              <span className={`block h-2.5 w-2.5 rounded bg-gradient-to-br ${project.color} opacity-70`} />
              <Bar w="80%" h="h-1" className="mt-1.5" />
              <Bar w="55%" h="h-1" className="mt-1 opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BotMock({ project }) {
  return (
    <div>
      {/* telegram header */}
      <div className="hairline-b flex items-center gap-2.5 bg-bg-soft px-3.5 py-2.5">
        <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${project.color}`}>
          <project.icon className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="flex-1 leading-tight">
          <span className="block font-mono text-[10px] font-semibold text-ink">{handleOf(project.link)}</span>
          <span className="block text-[9px] text-muted">bot · online</span>
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
      </div>

      {/* chat */}
      <div className="space-y-2 p-4">
        {/* incoming */}
        <div className="hairline w-[78%] rounded-xl rounded-tl-sm bg-bg-soft p-2.5">
          <Bar w="88%" h="h-1.5" />
          <Bar w="62%" h="h-1.5" className="mt-1.5 opacity-70" />
        </div>
        {/* inline keyboard */}
        <div className="grid w-[78%] grid-cols-2 gap-1.5">
          <span className={`h-5 rounded-md bg-gradient-to-r ${project.color} opacity-85`} />
          <span className={`h-5 rounded-md bg-gradient-to-r ${project.color} opacity-55`} />
          <span className={`col-span-2 h-5 rounded-md bg-gradient-to-r ${project.color} opacity-35`} />
        </div>
        {/* outgoing */}
        <div className="ml-auto w-[52%] rounded-xl rounded-tr-sm bg-accent-soft p-2.5">
          <Bar w="80%" h="h-1.5" className="!bg-accent/50" />
        </div>
        {/* input */}
        <div className="hairline mt-1 flex items-center justify-between rounded-full px-3 py-1.5">
          <Bar w="45%" h="h-1" className="opacity-60" />
          <Send className="h-3 w-3 text-accent" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectPreview({ project }) {
  return isBot(project.link) ? <BotMock project={project} /> : <SiteMock project={project} />;
}
