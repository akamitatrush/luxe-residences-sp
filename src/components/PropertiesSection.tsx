
import React from 'react';
import { properties, filters } from '../data/propertyData';
import { usePropertyFilter } from '../hooks/usePropertyFilter';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import PropertyDebugInfo from './PropertyDebugInfo';

const PropertiesSection = () => {
  const { activeFilter, filteredProperties, handleFilterClick } = usePropertyFilter(properties);

  return (
    <section id="properties" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="subheading-luxury text-charcoal-900 mb-6">
            Apartamentos de <span className="text-gold-500">Alto Padrão</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto font-light">
            Seleção criteriosa de apartamentos de luxo que redefinem o conceito de sofisticação urbana
          </p>
        </div>

        {/* Filters */}
        <PropertyFilters 
          filters={filters}
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
        />

        {/* Debug Info */}
        <PropertyDebugInfo 
          activeFilter={activeFilter}
          propertiesCount={filteredProperties.length}
        />

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard 
                key={property.id}
                property={property}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-charcoal-600 text-lg">
                Nenhum apartamento encontrado para o filtro: <strong>{activeFilter}</strong>
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-fade-in">
          <button className="btn-gold">
            Ver Todos os Apartamentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
