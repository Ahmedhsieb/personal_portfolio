import React from 'react';
import { GlitchText } from '../components/GlitchText';
import { SkillBar } from '../components/SkillBar';
import { cvData } from '../data/cvData';
export function SkillsPage() {
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              ls -la skills/
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cvData.skills.map((category, categoryIndex) =>
          <div
            key={category.category}
            className="border border-neon-cyan/30 bg-dark-secondary p-6">

              <h2 className="text-2xl font-bold text-neon-green font-mono mb-6">
                <span className="text-neon-cyan">&gt;</span> {category.category}
              </h2>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) =>
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={categoryIndex * 200 + skillIndex * 100} />

              )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 border border-neon-magenta/30 bg-dark-secondary p-6">
          <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
            <span className="text-neon-cyan">&gt;</span> Additional Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
            'REST APIs',
            // 'GraphQL',
            'Microservices',
            // 'Event-Driven Architecture',
            // 'CI/CD',
            // 'TDD',
            // 'Agile/Scrum',
            // 'System Design',
            // 'Performance Optimization',
            // 'Security Best Practices',
            'Code Review',
            'Technical Documentation',
            // 'Mentoring',
            'Problem Solving'].
            map((skill) =>
            <span
              key={skill}
              className="px-3 py-2 text-sm font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan hover:border-neon-magenta hover:text-neon-magenta transition-colors">

                {skill}
              </span>
            )}
          </div>
        </div>
      </div>
    </main>);

}