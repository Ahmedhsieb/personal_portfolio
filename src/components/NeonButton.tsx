import React from 'react';
interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'magenta' | 'green';
  children: React.ReactNode;
}
export function NeonButton({
  variant = 'cyan',
  children,
  className = '',
  ...props
}: NeonButtonProps) {
  const variantStyles = {
    cyan: 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-primary hover:shadow-neon-cyan',
    magenta:
    'border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-dark-primary hover:shadow-neon-magenta',
    green:
    'border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-primary hover:shadow-neon-green'
  };
  return (
    <button
      className={`
        px-6 py-3 border-2 font-mono font-semibold
        transition-all duration-300 ease-out
        glitch-hover
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}>

      <span className="flex items-center gap-2">
        <span className="text-neon-green">$</span>
        {children}
      </span>
    </button>);

}