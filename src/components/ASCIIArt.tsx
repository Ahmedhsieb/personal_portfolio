import React from 'react';
interface ASCIIArtProps {
  variant?: 'logo' | 'terminal' | 'code';
  className?: string;
}
export function ASCIIArt({ variant = 'logo', className = '' }: ASCIIArtProps) {
  const art = {
    logo: `
     _    _                          _ 
    / \\  | |__  _ __ ___   ___   __| |
   / _ \\ | '_ \\| '_ \` _ \\ / _ \\ / _\`|
  / ___ \\| | | | | | | | | (_) | (_| |
 /_/   \\_\\_| |_|_| |_| |_|\\___/ \\__,_|
                                      
`,

    terminal: `
┌───────────────────────────┐
│  > SYSTEM INITIALIZED     │
│  > LOADING PORTFOLIO...   │
│  > STATUS: ONLINE         │
└───────────────────────────┘
    `,
    code: `
{
  "status": "active",
  "mode": "cyberpunk",
  "level": "elite"
}
    `
  };
  return (
    <pre
      className={`font-mono text-neon-green text-xs sm:text-sm leading-tight ${className}`}
      aria-label={`ASCII art: ${variant}`}>

      {art[variant]}
    </pre>);

}