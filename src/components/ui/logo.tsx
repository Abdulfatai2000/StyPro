import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isDark?: boolean;
}

export function Logo({ variant = 'horizontal', className = '', size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-9 h-9',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const mark = (
    <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-160 hover:scale-105 shrink-0`}>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(94,106,210,0.4)]"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="10"
          fill="url(#stypro-gradient)"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="stypro-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5e6ad2" />
            <stop offset="1" stopColor="#4338ca" />
          </linearGradient>
        </defs>
        <path
          d="M11 13L16 18L11 23"
          stroke="#ffffff"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 13L20 18L25 23"
          stroke="#c7d2fe"
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
        className={`group inline-flex flex-col items-center gap-2 transition-opacity hover:opacity-95 ${className}`}
      >
        {mark}
        <div className="flex flex-col items-center text-center">
          <span className={`font-bold tracking-tight text-white font-display ${textSizes[size]}`}>
            Sty<span className="text-[#818cf8]">Pro</span>
          </span>
          <span className="text-xs text-[#9499ad] tracking-wide">
            From Style to Prompt to Code
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
      <div className="flex items-center gap-1.5">
        <span className={`font-bold tracking-tight text-white font-display ${textSizes[size]}`}>
          Sty<span className="text-[#818cf8]">Pro</span>
        </span>
      </div>
    </Link>
  );
}
