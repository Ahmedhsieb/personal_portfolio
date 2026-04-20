import React, { useMemo } from 'react';
import { GlitchText } from '../components/GlitchText';
import { cvData } from '../data/cvData';

interface ServiceDefinition {
  id: string;
  title: string;
  summary: string;
  detail: string;
  keywords: string[];
}

interface ServiceViewModel extends ServiceDefinition {
  relatedSkills: string[];
  relatedProjects: string[];
}

const serviceDefinitions: ServiceDefinition[] = [
  {
    id: 'erp-business-systems',
    title: 'ERP & Business Systems',
    summary: 'Design and build complete ERP solutions for growing businesses.',
    detail:
      'Modular ERP platforms covering CRM, accounting, suppliers, assets, production, and internal workflows tailored to your business processes.',
    keywords: ['PHP', 'Laravel', 'MySQL', 'Livewire', 'REST API']
  },
  {
    id: 'crm-customer-portals',
    title: 'CRM & Customer Platforms',
    summary: 'Custom CRM systems focused on leads, sales, and customer relations.',
    detail:
      'Lead pipelines, role-based access, customer timelines, and dashboards that centralize your customer operations.',
    keywords: ['Laravel', 'REST API', 'MySQL']
  },
  {
    id: 'hrm-internal-tools',
    title: 'HRM & Internal Tools',
    summary: 'Tools that streamline HR, payroll, and internal operations.',
    detail:
      'Employee management, payroll automation, leave tracking, and internal admin tools to reduce manual work.',
    keywords: ['Laravel', 'MySQL']
  },
  {
    id: 'marketplaces-portals',
    title: 'Marketplaces & Portals',
    summary: 'Backends for marketplaces, vendor platforms, and management dashboards.',
    detail:
      'Vendor onboarding, product catalogs, order flows, and admin panels with secure APIs for web or mobile clients.',
    keywords: ['Laravel', 'REST API', 'MySQL']
  },
  {
    id: 'booking-reservation',
    title: 'Booking & Reservation Systems',
    summary: 'Reliable booking engines for hotels and reservation-based businesses.',
    detail:
      'Availability logic, booking workflows, pricing rules, and user management with robust database design.',
    keywords: ['Laravel', 'MySQL']
  },
  {
    id: 'apis-integrations',
    title: 'APIs & Integrations',
    summary: 'REST APIs that connect your systems and third-party services.',
    detail:
      'Well-structured, secure, and documented APIs for web, mobile, and internal systems integration.',
    keywords: ['REST API', 'PHP', 'Laravel']
  },
  {
    id: 'maintenance-optimization',
    title: 'Maintenance & Optimization',
    summary: 'Improve performance, reliability, and maintainability of existing Laravel systems.',
    detail:
      'Refactoring legacy code, fixing bugs, profiling bottlenecks, and enhancing logging, monitoring, and debugging.',
    keywords: ['Laravel', 'MySQL', 'Debugger Tools', 'Laravel Telescope']
  }
];

export function ServicesPage() {
  const services: ServiceViewModel[] = useMemo(() => {
    const allSkills = cvData.skills.flatMap((category) => category.items);
    const allProjects = cvData.projects;
    return serviceDefinitions.map((service) => {
      const relatedSkills = allSkills
        .filter((skill) => service.keywords.includes(skill.name))
        .map((skill) => skill.name);
      const relatedProjects = allProjects
        .filter((project) =>
          project.tech.some((tech) => service.keywords.includes(tech))
        )
        .map((project) => project.name);
      return {
        ...service,
        relatedSkills: Array.from(new Set(relatedSkills)),
        relatedProjects: Array.from(new Set(relatedProjects))
      };
    });
  }, []);

  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              ls -la services/
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta mb-4" />
          <p className="text-text-muted font-mono max-w-2xl">
            Services I provide as a backend developer, built around my real
            projects and skills in PHP, Laravel, and MySQL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-neon-cyan/30 bg-dark-secondary p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-neon-green font-mono mb-2">
                  <span className="text-neon-cyan">&gt;</span> {service.title}
                </h2>
                <p className="text-text-primary font-mono text-sm mb-2">
                  {service.summary}
                </p>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {service.detail}
                </p>

                {service.relatedSkills.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-mono text-neon-green mb-2">
                      stack_used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.relatedProjects.length > 0 && (
                  <div>
                    <h3 className="text-sm font-mono text-neon-green mb-2">
                      related_projects
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedProjects.map((project) => (
                        <span
                          key={project}
                          className="px-3 py-1 text-xs font-mono bg-dark-primary border border-neon-magenta/30 text-neon-magenta"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

