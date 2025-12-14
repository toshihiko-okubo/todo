'use client';

import { FilterType } from '@/types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了' },
];

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  return (
    <div className="flex gap-3 mb-5 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-5 py-2 rounded-full cursor-pointer transition-all font-medium ${
            currentFilter === filter.value
              ? 'bg-white text-slate-700 shadow-md'
              : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
