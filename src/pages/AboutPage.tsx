import React from 'react';
import { GlitchText } from '../components/GlitchText';
import { ASCIIArt } from '../components/ASCIIArt';
import { cvData } from '../data/cvData';
export function AboutPage() {
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              cat about.txt
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="border-2 border-neon-cyan/30 p-4 bg-dark-secondary">
              <img
                src={cvData.personal.avatar}
                alt={cvData.personal.name}
                className="w-full aspect-square object-cover mb-4 border border-neon-cyan/50" />

              <ASCIIArt variant="terminal" className="text-xs" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="border border-neon-cyan/30 bg-dark-secondary p-6">
              <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
                <span className="text-neon-cyan">&gt;</span> Bio
              </h2>
              <div className="space-y-4">
                {cvData.about.bio.map((paragraph, index) =>
                <p key={index} className="text-text-muted leading-relaxed">
                    {paragraph}
                  </p>
                )}
              </div>
            </div>

            <div className="border border-neon-magenta/30 bg-dark-secondary p-6">
              <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
                <span className="text-neon-cyan">&gt;</span> Interests
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {cvData.about.interests.map((interest, index) =>
                <div
                  key={index}
                  className="flex items-center gap-2 text-text-primary font-mono text-sm">

                    <span className="text-neon-green" aria-hidden="true">
                      ▹
                    </span>
                    <span>{interest}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border border-neon-green/30 bg-dark-secondary p-6">
              <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
                <span className="text-neon-cyan">&gt;</span> Quick Stats
              </h2>
              <div className="grid grid-cols-2 gap-4 font-mono">
                <div>
                  <div className="text-neon-cyan text-2xl font-bold">1.5+</div>
                  <div className="text-text-muted text-sm">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-neon-magenta text-2xl font-bold">
                    10+
                  </div>
                  <div className="text-text-muted text-sm">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-neon-green text-2xl font-bold">15+</div>
                  <div className="text-text-muted text-sm">Technologies</div>
                </div>
                <div>
                  <div className="text-neon-cyan text-2xl font-bold">99.9%</div>
                  <div className="text-text-muted text-sm">Uptime Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>);

}