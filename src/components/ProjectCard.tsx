import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  onClick?: () => void;
}
export function ProjectCard({
  name,
  description,
  tech,
  link,
  github,
  image,
  onClick
}: ProjectCardProps) {
  return (
    <article
      className="holographic-border group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`View details for ${name} project`}>

      <div className="bg-dark-secondary p-6 h-full flex flex-col">
        <div className="relative h-48 mb-4 overflow-hidden border border-neon-cyan/30">
          <img
            src={image}
            alt={`${name} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-60" />
        </div>

        <h3
          className="text-xl font-bold text-neon-cyan mb-2 font-mono glitch-text"
          data-text={name}>

          {name}
        </h3>

        <p className="text-text-muted text-sm mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) =>
          <span
            key={item}
            className="px-2 py-1 text-xs font-mono bg-dark-primary border border-neon-green/30 text-neon-green">

              {item}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          {link &&
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-magenta transition-colors text-sm font-mono"
            aria-label={`Visit ${name} website`}>

              <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          }
          {github &&
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-magenta transition-colors text-sm font-mono"
            aria-label={`View ${name} on GitHub`}>

              <GithubIcon className="w-4 h-4" aria-hidden="true" />
              <span>Source</span>
            </a>
          }
        </div>
      </div>
    </article>);

}