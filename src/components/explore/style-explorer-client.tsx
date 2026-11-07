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
    <div className="space-y-6">
      {/* Search & Filter Controls Panel */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl border border-white/[0.08] bg-[#0e1017]/90 shadow-md">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9499ad]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search styles by name, tags, or design philosophy..."
            className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder:text-[#9499ad]/70 focus:outline-none focus:border-[#5e6ad2] focus:ring-1 focus:ring-[#5e6ad2] transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9499ad] hover:text-white cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Featured Toggle & Reset */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOnlyFeatured(!onlyFeatured)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              onlyFeatured
                ? 'bg-[#5e6ad2] text-white border-[#5e6ad2] shadow-xs'
                : 'bg-white/[0.04] text-[#9499ad] border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Only</span>
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-semibold text-[#818cf8] hover:underline px-2 py-1 cursor-pointer"
            >
              Reset all
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#5e6ad2] text-white border-[#5e6ad2] shadow-xs'
                  : 'bg-white/[0.04] text-[#9499ad] hover:bg-white/[0.08] hover:text-white border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Results Header Metadata */}
      <div className="flex items-center justify-between text-xs text-[#9499ad] py-1 border-b border-white/[0.08]">
        <span>
          Showing <strong className="text-white font-semibold">{filteredStyles.length}</strong> of {initialStyles.length} design styles
        </span>
        {hasActiveFilters && (
          <span className="text-[#818cf8] font-semibold">Filtered view</span>
        )}
      </div>

      {/* Styles Grid or Empty State */}
      {filteredStyles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStyles.map((style) => (
            <StyleCard key={style.id} style={style} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-white/[0.1] bg-[#0e1017]/50 p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center mx-auto text-[#9499ad]">
            <Filter className="w-5 h-5 text-[#818cf8]" />
          </div>
          <h4 className="text-base font-bold text-white">
            No matching design styles found
          </h4>
          <p className="text-sm text-[#9499ad] max-w-md mx-auto">
            Zero records match query &ldquo;{searchQuery}&rdquo; within the specified category.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="btn-primary"
          >
            Clear Active Filters
          </button>
        </div>
      )}
    </div>
  );
}
