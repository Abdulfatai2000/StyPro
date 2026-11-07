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
            <span>Pilot Design Systems</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#F4F5F8]">
            Curated Pilot Styles
          </h2>
          <p className="text-sm text-[#8C92A4]">
            Two radically distinct, production-grade design languages developed to test and establish the StyPro token engine.
          </p>
        </div>

        <Link
          href="/explore"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E6AD2] hover:text-[#6E79D8] transition-colors"
        >
          <span>Explore All Styles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </section>
  );
}

