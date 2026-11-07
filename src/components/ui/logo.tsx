import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'horizontal', className = '', size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const mark = (
    <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(94,106,210,0.5)]"
      >
        {/* Background shield/hex outline with ambient glow */}
        <rect
          x="4"
          y="4"
          width="32"
          height="32"
          rx="8"
          fill="#0D0F17"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1.5"
        />
        {/* Inner geometric style-to-code nexus: stepped brackets & central prism */}
        <path
          d="M12 14L18 20L12 26"
          stroke="#5E6AD2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 14L22 20L28 26"
          stroke="#9497A1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="2.5" fill="#5E6AD2" />
      </svg>
    </div>
  );

  if (variant === 'stacked') {
    return (
      <Link
        href="/"
        className={`group inline-flex flex-col items-center gap-2.5 transition-opacity hover:opacity-95 ${className}`}
      >
        {mark}
        <div className="flex flex-col items-center text-center">
          <span className={`font-semibold tracking-tight text-[#F4F5F8] ${textSizes[size]}`}>
            Sty<span className="text-[#5E6AD2]">Pro</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#8C92A4] font-mono">
            Style · Prompt · Code
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-95 ${className}`}
    >
      {mark}
      <span className={`font-semibold tracking-tight text-[#F4F5F8] ${textSizes[size]}`}>
        Sty<span className="text-[#5E6AD2]">Pro</span>
      </span>
    </Link>
  );
}

