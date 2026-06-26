import { marqueeItems } from '@/data/portfolio'

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{ borderColor: 'var(--card-border)' }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-sm font-medium"
            style={{ color: 'var(--fg-muted)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
