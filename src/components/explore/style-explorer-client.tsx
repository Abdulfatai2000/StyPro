'use client';

import React, { useState } from 'react';
import { Search, X, Sparkles, Filter } from 'lucide-react';
import { DesignStyle } from '@/types/style';
import { getAllCategories } from '@/data/styles';
import { StyleCard } from './style-card';

interface StyleExplorerClientProps {
  initialStyles: DesignStyle[];
}

export function StyleExplorerClient({ initialStyles }: StyleExplorerClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  const categories = getAllCategories();

  // Filter styles reactively
  const filteredStyles = initialStyles.filter((style) => {
    // Category filter
    if (selectedCategory !== 'all' && style.category !== selectedCategory) {
      return false;
    }

    // Featured filter
    if (onlyFeatured && !style.isFeatured) {
      return false;
    }

    // Search query filter (matches name, description, tags, philosophy)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchesName = style.name.toLowerCase().includes(query);
      const matchesDesc = style.description.toLowerCase().includes(query);
      const matchesTags = style.tags.some((t) => t.toLowerCase().includes(query));
      const matchesPhilosophy = style.philosophy.direction.toLowerCase().includes(query);
      return matchesName || matchesDesc || matchesTags || matchesPhilosophy;
    }

    return true;
  });

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || onlyFeatured;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setOnlyFeatured(false);
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#090A0F]">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C92A4]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search styles by name, tags, or design philosophy..."
            className="w-full pl-10 pr-9 py-2 rounded-lg bg-[#050506] border border-white/[0.08] text-sm text-[#F4F5F8] placeholder:text-[#636A7E] focus:outline-none focus:border-[#5E6AD2] focus:ring-1 focus:ring-[#5E6AD2] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C92A4] hover:text-[#F4F5F8]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Featured toggle & Reset */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOnlyFeatured(!onlyFeatured)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              onlyFeatured
                ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                : 'bg-[#050506] text-[#9BA1B0] border-white/[0.08] hover:text-[#F4F5F8]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Only</span>
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-[#5E6AD2] hover:underline px-2 py-1"
            >
              Reset all
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#5E6AD2] text-white shadow-[0_0_15px_rgba(94,106,210,0.4)]'
                  : 'bg-white/[0.04] text-[#9BA1B0] hover:bg-white/[0.08] hover:text-[#F4F5F8] border border-white/[0.06]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#8C92A4]">
        <span>
          Showing <strong className="text-[#F4F5F8]">{filteredStyles.length}</strong> design{' '}
          {filteredStyles.length === 1 ? 'style' : 'styles'}
        </span>
        {hasActiveFilters && (
          <span className="text-[#5E6AD2] font-mono">Filtered view</span>
        )}
      </div>

      {/* Styles Grid or Empty State */}
      {filteredStyles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredStyles.map((style) => (
            <StyleCard key={style.id} style={style} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-white/[0.12] bg-[#090A0F]/50 p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto text-[#8C92A4]">
            <Filter className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-semibold text-[#F4F5F8]">No design styles match your filter</h4>
          <p className="text-sm text-[#8C92A4] max-w-md mx-auto">
            We couldn’t find any styles matching &ldquo;{searchQuery}&rdquo; in the selected category.
            Try adjusting your search terms or clearing active filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5E6AD2] text-white text-xs font-medium hover:bg-[#6E79D8] transition-colors"
          >
            Clear Active Filters
          </button>
        </div>
      )}
    </div>
  );
}

