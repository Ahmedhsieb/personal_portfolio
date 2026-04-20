import React, { Component } from 'react';
interface GlitchTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}
export function GlitchText({
  children,
  className = '',
  as: Component = 'span'
}: GlitchTextProps) {
  return (
    <Component className={`glitch-text ${className}`} data-text={children}>
      {children}
    </Component>);

}