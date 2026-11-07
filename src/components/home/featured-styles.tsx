import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedStyles } from '@/data/styles';
import { StyleCard } from '@/components/explore/style-card';

export function FeaturedStyles() {
  const featured = getFeaturedStyles();

  return (
    <section id="featured" className="py-20 md:py-28 bg-[#08090c] border-t border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Design Languages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Featured Design Systems
            </h2>
            <p className="text-sm text-[#9499ad] font-body">
              Production-grade design systems spanning developer tools, enterprise platforms, neo-brutalism, spatial glass, and minimal typography.
            </p>
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#818cf8] hover:underline"
          >
            <span>Explore All 12 Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((style) => (
            <StyleCard key={style.id} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
}
