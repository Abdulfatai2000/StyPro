import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
}

export function Logo({ variant = 'horizontal', className = '', size = 'md', isDark = false }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const mark = (
    <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-160 hover:scale-105`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Soft rounded gradient tile */}
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="10"
          fill={isDark ? '#1f242d' : '#074ce0'}
          stroke={isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(7, 76, 224, 0.2)'}
          strokeWidth="1.5"
        />
        {/* Converging modern design-to-code nexus paths */}
        <path
          d="M11 13L16 18L11 23"
          stroke="#ffffff"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 13L20 18L25 23"
          stroke={isDark ? '#074ce0' : '#8ab4f8'}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="2" fill="#ffffff" />
      </svg>
    </div>
  );

  if (variant === 'stacked') {
    return (
      <Link
        href="/"
        className={`group inline-flex flex-col items-center gap-2 transition-opacity hover:opacity-90 ${className}`}
      >
        {mark}
        <div className="flex flex-col items-center text-center">
          <span className={`font-bold tracking-tight font-display ${isDark ? 'text-[#fcfcfd]' : 'text-[#16191f]'} ${textSizes[size]}`}>
            Sty<span className="text-[#074ce0]">Pro</span>
          </span>
          <span className={`text-[12px] font-medium tracking-wide ${isDark ? 'text-[#d0d4dd]' : 'text-[#454c58]'}`}>
            From Style to Prompt to Code
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}
    >
      {mark}
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight font-display ${isDark ? 'text-[#fcfcfd]' : 'text-[#16191f]'} ${textSizes[size]}`}>
          Sty<span className="text-[#074ce0]">Pro</span>
        </span>
      </div>
    </Link>
  );
}
