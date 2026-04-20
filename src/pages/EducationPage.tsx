import React from 'react';
import { GlitchText } from '../components/GlitchText';
import { cvData } from '../data/cvData';
export function EducationPage() {
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              cat education.log
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        </div>

        <div className="space-y-6">
          {cvData.education.map((edu) =>
          <article
            key={`${edu.institution}-${edu.degree}`}
            className="border border-neon-cyan/30 bg-dark-secondary p-6 hover:border-neon-magenta/50 transition-colors">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-neon-cyan font-mono mb-2">
                    {edu.institution}
                  </h2>
                  <p className="text-neon-green font-mono">{edu.degree}</p>
                </div>
                <span className="text-text-muted font-mono text-sm mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>

              <ul className="space-y-2" role="list">
                {edu.details.map((detail, index) =>
              <li key={index} className="flex items-start text-text-muted">
                    <span
                  className="text-neon-green mr-3 flex-shrink-0"
                  aria-hidden="true">

                      ▹
                    </span>
                    <span>{detail}</span>
                  </li>
              )}
              </ul>
            </article>
          )}
        </div>

        <div className="mt-12 border border-neon-magenta/30 bg-dark-secondary p-6">
          <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
            <span className="text-neon-cyan">&gt;</span> Academic Achievements
          </h2>
          <div className="mt-6 border-l-2 border-neon-magenta pl-4">
            <h3 className="text-neon-magenta text-lg font-bold font-mono mb-2">IEEE-BUB SB Activities</h3>
            <ul className="space-y-1 text-text-muted text-sm">
              <li>− Joined as problem solving member (Oct 2022 – Aug 2023)</li>
              <li>− Studying C++ & problem solving</li>
              <li>− Work on Codeforces</li>
              <li>− Joined as Scientific Arduino member (Oct 2021 – Aug 2022)</li>
              <li>− Studying C-Arduino and Arduino system</li>
              <li>− Built Arduino projects</li>
            </ul>
          </div>
          <div className="mt-6 border-l-2 border-neon-cyan pl-4">
            <h3 className="text-neon-cyan text-lg font-bold font-mono mb-2">Error Team Activities</h3>
            <ul className="space-y-1 text-text-muted text-sm">
              <li>− Joined as HR member (Oct 2021 – Aug 2022)</li>
              <li>− Help the team to organize events</li>
              <li>− Help to evaluate the team's performance</li>
              <li>− Make team reports</li>
            </ul>
          </div>
        </div>
      </div>
    </main>);

}