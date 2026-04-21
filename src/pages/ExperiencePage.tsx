import React, { useState } from "react";
import { GlitchText } from "../components/GlitchText";
import { TimelineItem } from "../components/TimelineItem";
import { CyberpunkModal } from "../components/CyberpunkModal";
import { cvData, Experience } from "../data/cvData";
export function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              git log --experience
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        </div>

        <div className="space-y-0">
          {cvData.experience.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${exp.role}`}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              description={exp.description}
              tech={exp.tech}
              isLast={index === cvData.experience.length - 1}
              onClick={() => openModal(exp)}
            />
          ))}
        </div>
      </div>

      {/* Experience Modal */}
      <CyberpunkModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          selectedExperience
            ? `${selectedExperience.role} @ ${selectedExperience.company}`
            : ""
        }
      >
        {selectedExperience && (
          <div className="space-y-6">
            {/* Period */}
            <div className="flex items-center gap-2 text-text-muted font-mono">
              <span className="text-neon-green">📅</span>
              <span>{selectedExperience.period}</span>
            </div>

            {/* Company & Role */}
            <div>
              <h3 className="text-2xl font-bold text-neon-cyan font-mono mb-2">
                {selectedExperience.role}
              </h3>
              <p className="text-xl text-neon-green font-mono">
                {selectedExperience.company}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-neon-green font-mono mb-3 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Responsibilities
              </h3>
              <ul className="space-y-3" role="list">
                {selectedExperience.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-muted flex items-start leading-relaxed"
                  >
                    <span
                      className="text-neon-green mr-3 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold text-neon-green font-mono mb-3 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-sm font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </CyberpunkModal>
    </main>
  );
}
