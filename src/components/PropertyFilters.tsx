
import React from 'react';

interface PropertyFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ 
  filters, 
  activeFilter, 
  onFilterClick 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterClick(filter)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            activeFilter === filter
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-foreground hover:bg-muted border border-border shadow-sm'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default PropertyFilters;
