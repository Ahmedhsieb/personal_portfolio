import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlitchText } from './GlitchText';
const navItems = [
{
  path: '/',
  label: 'home'
},
{
  path: '/about',
  label: 'about'
},
{
  path: '/skills',
  label: 'skills'
},
{
  path: '/services',
  label: 'services'
},
{
  path: '/experience',
  label: 'experience'
},
{
  path: '/projects',
  label: 'projects'
},
{
  path: '/education',
  label: 'education'
},
{
  path: '/courses',
  label: 'courses'
},
{
  path: '/contact',
  label: 'contact'
}];

export function TerminalNav() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-secondary/95 backdrop-blur-sm border-b border-neon-cyan/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={closeMobileMenu}>

            <span className="text-neon-green text-xl">$</span>
            <GlitchText
              as="span"
              className="text-xl font-bold text-neon-cyan group-hover:text-neon-magenta transition-colors">

              Ahmed.dev
            </GlitchText>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-4 py-2 font-mono text-sm transition-all duration-300
                    ${isActive ? 'text-neon-cyan border-b-2 border-neon-cyan' : 'text-text-muted hover:text-neon-green border-b-2 border-transparent'}
                  `}
                  aria-current={isActive ? 'page' : undefined}>

                  <span className="text-neon-green mr-1">./</span>
                  {item.label}
                </Link>);

            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-neon-cyan hover:text-neon-magenta transition-colors p-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}>

              <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-dark-secondary border-t border-neon-cyan/30 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>

        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`
                  block px-4 py-2 font-mono text-sm transition-colors
                  ${isActive ? 'text-neon-cyan bg-dark-primary/50' : 'text-text-muted hover:text-neon-green hover:bg-dark-primary/30'}
                `}>

                <span className="text-neon-green mr-1">./</span>
                {item.label}
              </Link>);

          })}
        </div>
      </div>
    </nav>);

}
