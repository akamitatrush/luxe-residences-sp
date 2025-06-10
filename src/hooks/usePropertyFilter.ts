
import { useState, useMemo } from 'react';
import { Property } from '../data/propertyData';

export const usePropertyFilter = (properties: Property[]) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProperties = useMemo(() => {
    if (activeFilter === 'Todos') {
      return properties;
    }
    return properties.filter(property => property.category === activeFilter);
  }, [activeFilter, properties]);

  const handleFilterClick = (filter: string) => {
    console.log(`Filtro clicado: ${filter}`);
    setActiveFilter(filter);
  };

  return {
    activeFilter,
    filteredProperties,
    handleFilterClick
  };
};
