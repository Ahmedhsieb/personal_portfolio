import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
interface TerminalPromptProps {
  text: string;
  prefix?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  className?: string;
}
export function TerminalPrompt({
  text,
  prefix = '>',
  speed = 50,
  delay = 0,
  showCursor = true,
  className = ''
}: TerminalPromptProps) {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed,
    delay
  });
  return (
    <div className={`font-mono ${className}`}>
      <span className="text-neon-green mr-2">{prefix}</span>
      <span className="text-text-primary">{displayText}</span>
      {showCursor && !isComplete &&
      <span
        className="inline-block w-2 h-5 bg-neon-cyan ml-1 cursor-blink"
        aria-hidden="true" />

      }
    </div>);

}