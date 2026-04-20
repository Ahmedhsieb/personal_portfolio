import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
import { GlitchText } from '../components/GlitchText';
import { cvData } from '../data/cvData';
export function CoursesPage() {
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              ls certifications/
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta mb-4" />
          <p className="text-text-muted font-mono">
            Continuous learning through courses and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.courses.map((course) =>
          <article
            key={`${course.name}-${course.provider}`}
            className="border border-neon-cyan/30 bg-dark-secondary p-6 hover:border-neon-magenta/50 transition-colors group">

              <div className="mb-4">
                <h2 className="text-xl font-bold text-neon-cyan font-mono mb-2 group-hover:text-neon-magenta transition-colors">
                  {course.name}
                </h2>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neon-green font-mono">
                    {course.provider}
                  </span>
                  <span className="text-text-muted font-mono">
                    {course.year}
                  </span>
                </div>
              </div>

              {/* <a
              href={course.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-cyan hover:text-neon-magenta transition-colors text-sm font-mono"
              aria-label={`View certificate for ${course.name}`}>

                <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
                <span>View Certificate</span>
              </a> */}
            </article>
          )}
        </div>

        <div className="mt-12 border border-neon-green/30 bg-dark-secondary p-6">
          <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
            <span className="text-neon-cyan">&gt;</span> Learning Philosophy
          </h2>
          <div className="space-y-3 text-text-muted">
            <p className="flex items-start">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true">

                ▹
              </span>
              <span>
                Technology evolves rapidly - continuous learning is essential
                for staying relevant
              </span>
            </p>
            <p className="flex items-start">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true">

                ▹
              </span>
              <span>
                Formal certifications validate skills and demonstrate commitment
                to excellence
              </span>
            </p>
            <p className="flex items-start">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true">

                ▹
              </span>
              <span>
                Hands-on projects and real-world application solidify
                theoretical knowledge
              </span>
            </p>
            <p className="flex items-start">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true">

                ▹
              </span>
              <span>
                Sharing knowledge through mentoring and documentation benefits
                the entire community
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>);

}