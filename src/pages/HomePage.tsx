import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ChevronDownIcon } from
'lucide-react';
import { TerminalPrompt } from '../components/TerminalPrompt';
import { ASCIIArt } from '../components/ASCIIArt';
import { NeonButton } from '../components/NeonButton';
import { GlitchText } from '../components/GlitchText';
import { cvData } from '../data/cvData';
export function HomePage() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <ASCIIArt variant="logo" className="mb-8 opacity-80" />
        </div>

        <div className="space-y-6 mb-12">
          <TerminalPrompt
            text="Connection established. Welcome to my portfolio."
            speed={30}
            delay={5000}
            showCursor={true} />

        </div>

        {showContent &&
        <div className="space-y-8 animate-fade-in">
            <div className="border-l-4 border-neon-cyan pl-6">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                <GlitchText as="span" className="text-neon-cyan">
                  {cvData.personal.name}
                </GlitchText>
              </h1>
              <p className="text-xl sm:text-2xl text-neon-green font-mono mb-2">
                {cvData.personal.title}
              </p>
              <p className="text-text-muted font-mono">
                {cvData.personal.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <NeonButton variant="cyan">view_projects</NeonButton>
              </Link>
              <Link to="/contact">
                <NeonButton variant="magenta">get_in_touch</NeonButton>
              </Link>
            </div>

            <div className="flex gap-6 pt-8">
              <a
              href={cvData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-neon-cyan transition-colors"
              aria-label="GitHub profile">

                <GithubIcon className="w-6 h-6" />
              </a>
              <a
              href={cvData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-neon-cyan transition-colors"
              aria-label="LinkedIn profile">

                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
              href={`mailto:${cvData.personal.social.email}`}
              className="text-text-muted hover:text-neon-cyan transition-colors"
              aria-label="Email contact">

                <MailIcon className="w-6 h-6" />
              </a>
            </div>
{/* 
            <div className="pt-12 text-center">
              <ChevronDownIcon
              className="w-8 h-8 text-neon-green mx-auto animate-bounce"
              aria-label="Scroll down" />

            </div> */}
          </div>
        }
      </div>
    </main>);

}