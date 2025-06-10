
import { useState, useMemo } from 'react';
import { Property } from '../data/propertyData';

export const usePropertyFilter = (properties: Property[]) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filteredProperties = useMemo(() => {
    console.log(`Filtrando por: ${activeFilter}`);
    console.log(`Total de propriedades: ${properties.length}`);
    
    if (activeFilter === 'Todos') {
      console.log('Mostrando todas as propriedades');
      return properties;
    }
    
    const filtered = properties.filter(property => property.category === activeFilter);
    console.log(`Propriedades filtradas: ${filtered.length}`);
    return filtered;
  }, [properties, activeFilter]);

  const handleFilterClick = (filter: string) => {
    console.log(`Mudando filtro de ${activeFilter} para ${filter}`);
    setActiveFilter(filter);
  };

  return {
    activeFilter,
    filteredProperties,
    handleFilterClick
  };
};
