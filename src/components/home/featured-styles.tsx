import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedStyles } from '@/data/styles';
import { StyleCard } from '@/components/explore/style-card';

export function FeaturedStyles() {
  const featured = getFeaturedStyles();

  return (
    <section id="featured" className="py-16 md:py-24 border-t border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#5E6AD2]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Design Systems</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#F4F5F8]">
            Featured Design Languages
          </h2>
          <p className="text-sm text-[#8C92A4]">
            Handcrafted, production-grade design systems spanning developer tools, fintech, neo-brutalism, spatial glass, and minimal typography.
          </p>
        </div>

        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E6AD2] hover:text-[#6E79D8] transition-colors"
        >
          <span>Explore All 12 Styles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </section>
  );
}
