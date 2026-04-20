import React from 'react';
import { useGlitch } from '../hooks/useGlitch';
interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  isLast?: boolean;
  onClick?: () => void;
}
export function TimelineItem({
  company,
  role,
  period,
  description,
  tech,
  isLast = false,
  onClick
}: TimelineItemProps) {
  const { isGlitching, triggerGlitch } = useGlitch();
  return (
    <div className="relative pl-8 pb-12">
      <div
        className={`absolute left-0 top-0 w-4 h-4 border-2 border-neon-cyan bg-dark-primary ${isGlitching ? 'animate-glitch' : ''}`}
        style={{
          boxShadow: '0 0 10px #00f0ff',
          transform: 'rotate(45deg)'
        }}
        aria-hidden="true" />


      {!isLast &&
      <div
        className="absolute left-[7px] top-4 w-0.5 h-full bg-gradient-to-b from-neon-cyan to-transparent"
        aria-hidden="true" />

      }

      <div
        className="border border-neon-cyan/30 bg-dark-secondary p-6 hover:border-neon-magenta/50 transition-colors cursor-pointer"
        onMouseEnter={triggerGlitch}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
        aria-label={`View details for ${role} at ${company}`}>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-neon-cyan font-mono mb-1">
              {role}
            </h3>
            <p className="text-neon-green font-mono">{company}</p>
          </div>
          <span className="text-text-muted font-mono text-sm mt-2 sm:mt-0">
            {period}
          </span>
        </div>

        <ul className="space-y-2 mb-4" role="list">
          {description.slice(0, 2).map((item, index) =>
          <li
            key={index}
            className="text-text-muted text-sm flex items-start">

              <span
              className="text-neon-green mr-2 flex-shrink-0"
              aria-hidden="true">

                ▹
              </span>
              <span>{item}</span>
            </li>
          )}
          {description.length > 2 &&
          <li className="text-neon-cyan text-sm font-mono">
              + {description.length - 2} more details...
            </li>
          }
        </ul>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) =>
          <span
            key={item}
            className="px-2 py-1 text-xs font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan">

              {item}
            </span>
          )}
        </div>
      </div>
    </div>);

}