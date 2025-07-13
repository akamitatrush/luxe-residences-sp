
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
              ? 'bg-white text-black border-2 border-black shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-300 shadow-sm hover:border-gray-400'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default PropertyFilters;
