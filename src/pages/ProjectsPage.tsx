import React, { useState } from 'react';
import { GlitchText } from '../components/GlitchText';
import { ProjectCard } from '../components/ProjectCard';
import { CyberpunkModal } from '../components/CyberpunkModal';
import { cvData, Project } from '../data/cvData';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              cd projects/ && ls
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta mb-4" />
          <p className="text-text-muted font-mono">
            A collection of open-source projects and side ventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.projects.map((project) =>
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            tech={project.tech}
            link={project.link}
            github={project.github}
            image={project.image}
            onClick={() => openModal(project)} />

          )}
        </div>

        <div className="mt-12 border border-neon-cyan/30 bg-dark-secondary p-6 text-center">
          <p className="text-text-muted font-mono mb-4">
            Want to see more? Check out my GitHub for additional projects and
            contributions.
          </p>
          <a
            href={cvData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-primary transition-all font-mono font-semibold">

            <span className="text-neon-green">$</span> view_github
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <CyberpunkModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject?.name || ''}>

        {selectedProject &&
        <div className="space-y-6">
            {/* Project Image */}
            <div className="relative h-64 sm:h-96 overflow-hidden border-2 border-neon-cyan/30">
              <img
              src={selectedProject.image}
              alt={`${selectedProject.name} screenshot`}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-60" />
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-neon-green font-mono mb-3 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Description
              </h3>
              <p className="text-text-muted leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold text-neon-green font-mono mb-3 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((item) =>
              <span
                key={item}
                className="px-3 py-2 text-sm font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan">

                    {item}
                  </span>
              )}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-neon-cyan/30">
              {selectedProject.link &&
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-primary transition-all font-mono">

                  <ExternalLinkIcon className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
            }
              {selectedProject.github &&
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-dark-primary transition-all font-mono">

                  <GithubIcon className="w-5 h-5" />
                  <span>View Source</span>
                </a>
            }
            </div>
          </div>
        }
      </CyberpunkModal>
    </main>);

}