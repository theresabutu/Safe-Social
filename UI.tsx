import React from 'react';
import { cn } from '../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'lowest' | 'low' | 'high' | 'highest';
}

export const Card = ({ children, className, variant = 'lowest' }: CardProps) => {
  const variants = {
    lowest: 'bg-surface-container-lowest',
    low: 'bg-surface-container-low',
    high: 'bg-surface-container-high',
    highest: 'bg-surface-container-highest',
  };

  return (
    <div className={cn(
      'rounded-3xl p-6 editorial-shadow transition-all duration-300',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};

export const ReassuranceBanner = ({ 
  title = "Status: Safe", 
  description = "SafeSocial AI is actively protecting your digital space.",
  className 
}: { 
  title?: string; 
  description?: string;
  className?: string;
}) => (
  <div className={cn("bg-secondary-container text-on-secondary-container rounded-3xl p-6 flex items-center gap-4 editorial-shadow", className)}>
    <div className="relative flex items-center justify-center shrink-0">
      <div className="absolute w-12 h-12 bg-secondary/20 rounded-full animate-ping"></div>
      <div className="relative w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
      </div>
    </div>
    <div>
      <h2 className="font-headline font-bold text-xl">{title}</h2>
      <p className="opacity-80 text-sm">{description}</p>
    </div>
  </div>
);
