
import React, { useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { properties, filters } from '../data/propertyData';
import { Property } from '../data/propertyData';
import { usePropertyFilter } from '../hooks/usePropertyFilter';
import PropertyCard from './PropertyCard';
import PropertyFilters from './PropertyFilters';
import PropertyModal from './PropertyModal';

// ✅ Memoização do PropertyCard para evitar re-renders desnecessários
const MemoizedPropertyCard = memo(PropertyCard);

const PropertiesSection = () => {
  const navigate = useNavigate();
  const { activeFilter, filteredProperties, handleFilterClick } = usePropertyFilter(properties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ useCallback para evitar re-criação da função
  const handlePropertyClick = useCallback((property: Property) => {
    console.log('Propriedade clicada:', property.name);
    setSelectedProperty(property);
    setIsModalOpen(true);
  }, []);

  // ✅ useCallback para evitar re-criação da função
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  }, []);

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-8">
            Apartamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Seleção de apartamentos de alto padrão em São Paulo
          </p>
        </div>

        {/* Filters */}
        <PropertyFilters 
          filters={filters}
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
        />

        {/* Info limpa */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">
            {filteredProperties.length} apartamentos disponíveis
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <MemoizedPropertyCard 
                key={property.id} // ✅ Key estável baseada apenas no ID
                property={property}
                index={index}
                onClick={() => handlePropertyClick(property)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-xl">
                Nenhum apartamento encontrado
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button 
            onClick={() => navigate('/propriedades')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
          >
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

// ✅ Memoização do componente principal
export default memo(PropertiesSection);
