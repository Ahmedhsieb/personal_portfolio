import React, { useEffect, useState } from 'react';
interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
  delay?: number;
}
export function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {icon}
          </span>
          <span className="font-mono text-text-primary">{name}</span>
        </div>
        {/* <span className="font-mono text-neon-cyan text-sm">{level}%</span> */}
      </div>
      <div className="h-2 bg-dark-secondary border border-neon-cyan/30 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-green transition-all duration-1000 ease-out ${isVisible ? 'skill-bar-fill' : 'w-0'}`}
          style={{
            // width: isVisible ? `${level}%` : '0%',
            width: isVisible ? `100%` : '0%',
            boxShadow: '0 0 10px currentColor'
          }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          // aria-label={`${name} skill level: ${level}%`} />
          aria-label={`${name} skill level: 100%`} />

      </div>
    </div>);

}