import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
import { GlitchText } from '../components/GlitchText';
import { TerminalForm } from '../components/TerminalForm';
import { ASCIIArt } from '../components/ASCIIArt';
import { cvData } from '../data/cvData';
export function ContactPage() {
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              ./contact.sh
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta mb-4" />
          <p className="text-text-muted font-mono">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <TerminalForm />
          </div>

          <div className="space-y-6">
            <div className="border border-neon-cyan/30 bg-dark-secondary p-6">
              <h2 className="text-2xl font-bold text-neon-green font-mono mb-6">
                <span className="text-neon-cyan">&gt;</span> Connect
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${cvData.personal.social.email}`}
                  className="flex items-center gap-3 text-text-muted hover:text-neon-cyan transition-colors group">

                  <MailIcon className="w-5 h-5 text-neon-cyan group-hover:text-neon-magenta transition-colors" />
                  <span className="font-mono">
                    {cvData.personal.social.email}
                  </span>
                </a>
                <a
                  href={cvData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-neon-cyan transition-colors group">

                  <GithubIcon className="w-5 h-5 text-neon-cyan group-hover:text-neon-magenta transition-colors" />
                  <span className="font-mono">github.com/Ahmedhsieb</span>
                </a>
                <a
                  href={cvData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-neon-cyan transition-colors group">

                  <LinkedinIcon className="w-5 h-5 text-neon-cyan group-hover:text-neon-magenta transition-colors" />
                  <span className="font-mono">linkedin.com/in/ahmed-osama-573634331</span>
                </a>
              </div>
            </div>

            <div className="border border-neon-magenta/30 bg-dark-secondary p-6">
              <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
                <span className="text-neon-cyan">&gt;</span> Availability
              </h2>
              <div className="space-y-3 text-text-muted font-mono text-sm">
                <p className="flex items-start">
                  <span className="text-neon-green mr-2" aria-hidden="true">
                    ✓
                  </span>
                  <span>Open to freelance projects</span>
                </p>
                <p className="flex items-start">
                  <span className="text-neon-green mr-2" aria-hidden="true">
                    ✓
                  </span>
                  <span>Available for consulting</span>
                </p>
                <p className="flex items-start">
                  <span className="text-neon-green mr-2" aria-hidden="true">
                    ✓
                  </span>
                  <span>Open source collaborations</span>
                </p>
                <p className="flex items-start">
                  <span className="text-neon-green mr-2" aria-hidden="true">
                    ✓
                  </span>
                  <span>Speaking engagements</span>
                </p>
              </div>
            </div>

            {/* <div className="border border-neon-green/30 bg-dark-secondary p-4">
              <ASCIIArt variant="code" />
            </div> */}
          </div>
        </div>
      </div>
    </main>);

}