
import React, { useState } from 'react';
import { properties, filters } from '../data/propertyData';
import { Property } from '../data/propertyData';
import { usePropertyFilter } from '../hooks/usePropertyFilter';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import PropertyModal from './PropertyModal';

const PropertiesSection = () => {
  const { activeFilter, filteredProperties, handleFilterClick } = usePropertyFilter(properties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: Property) => {
    console.log('Propriedade clicada:', property.name);
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <section id="properties" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-900 mb-6">
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
        <div className="text-center mb-8">
          <p className="text-sm text-charcoal-500">
            Filtro ativo: <strong>{activeFilter}</strong> | 
            Apartamentos encontrados: <strong>{filteredProperties.length}</strong>
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <PropertyCard 
                key={`${property.id}-${activeFilter}`}
                property={property}
                index={index}
                onClick={() => handlePropertyClick(property)}
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
        <div className="text-center mt-16">
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Ver Todos os Apartamentos
          </button>
        </div>

        {/* Modal */}
        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default PropertiesSection;
