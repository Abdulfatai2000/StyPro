import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedStyles } from '@/data/styles';
import { StyleCard } from '@/components/explore/style-card';

export function FeaturedStyles() {
  const featured = getFeaturedStyles();

  return (
    <section id="featured" className="py-16 md:py-24 bg-[#f3f4f6] border-t border-b border-[#dde0e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#dde0e6]">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-[#074ce0]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Design Languages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#16191f] font-display">
              Featured Design Systems
            </h2>
            <p className="text-sm text-[#454c58] font-body">
              Handcrafted, production-grade design systems spanning developer tools, enterprise platforms, neo-brutalism, spatial glass, and minimal typography.
            </p>
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#074ce0] hover:underline"
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
