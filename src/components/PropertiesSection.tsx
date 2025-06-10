
import React, { useState } from 'react';

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const properties = [
    {
      id: 1,
      name: 'Apartamento Jardins Époque',
      location: 'Jardins, São Paulo',
      price: 'R$ 12.900.000',
      specs: '4 suítes, 5 banheiros, 580m²',
      badge: 'TOP VENDAS',
      badgeColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Jardins'
    },
    {
      id: 2,
      name: 'Apartamento Palazzo Morumbi',
      location: 'Morumbi, São Paulo',
      price: 'R$ 18.500.000',
      specs: '5 suítes, 6 banheiros, 860m²',
      badge: 'EXCLUSIVO',
      badgeColor: 'bg-gold-500',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Morumbi'
    },
    {
      id: 3,
      name: 'Apartamento Elysium Moema',
      location: 'Moema, São Paulo',
      price: 'R$ 21.750.000',
      specs: '6 suítes, 7 banheiros, 950m²',
      badge: 'LANÇAMENTO',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1560449752-3fd4bdff26b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Moema'
    },
    {
      id: 4,
      name: 'Apartamento Alphaville Elite',
      location: 'Alphaville, São Paulo',
      price: 'R$ 8.900.000',
      specs: '4 suítes, 5 banheiros, 450m²',
      badge: 'OPORTUNIDADE',
      badgeColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Alphaville'
    },
    {
      id: 5,
      name: 'Apartamento Moderno Jardins',
      location: 'Jardins, São Paulo',
      price: 'R$ 15.200.000',
      originalPrice: 'R$ 16.800.000',
      specs: '5 suítes, 6 banheiros, 750m²',
      badge: 'VENDIDO',
      badgeColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Jardins'
    },
    {
      id: 6,
      name: 'Penthouse Moema Premium',
      location: 'Moema, São Paulo',
      price: 'R$ 28.500.000',
      specs: '4 suítes master, 6 banheiros, 650m²',
      badge: 'EXCLUSIVO',
      badgeColor: 'bg-gold-500',
      image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Moema'
    },
    {
      id: 7,
      name: 'Residencial Morumbi Luxury',
      location: 'Morumbi, São Paulo',
      price: 'R$ 22.800.000',
      specs: '5 suítes, 7 banheiros, 820m²',
      badge: 'NOVO',
      badgeColor: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Morumbi'
    },
    {
      id: 8,
      name: 'Alphaville Residencial Plus',
      location: 'Alphaville, São Paulo',
      price: 'R$ 11.500.000',
      specs: '4 suítes, 5 banheiros, 520m²',
      badge: 'TOP VENDAS',
      badgeColor: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Alphaville'
    }
  ];

  const filters = ['Todos', 'Jardins', 'Moema', 'Morumbi', 'Alphaville'];

  const filteredProperties = activeFilter === 'Todos' 
    ? properties 
    : properties.filter(property => property.category === activeFilter);

  console.log('Active filter:', activeFilter);
  console.log('Filtered properties count:', filteredProperties.length);

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
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-fade-in">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                console.log(`Setting filter to: ${filter}`);
                setActiveFilter(filter);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-charcoal-600 hover:bg-gold-100 border border-gold-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className="property-card scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Badge */}
                  {property.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${property.badgeColor}`}>
                      {property.badge}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="property-overlay flex items-center justify-center">
                    <button className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal-900 mb-2">
                    {property.name}
                  </h3>
                  <p className="text-charcoal-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>
                  <p className="text-sm text-charcoal-500 mb-4">{property.specs}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      {property.originalPrice && (
                        <span className="text-sm text-charcoal-400 line-through mr-2">
                          {property.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-playfair font-bold text-gold-600">
                        {property.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-charcoal-600 text-lg">
                Nenhum apartamento encontrado para {activeFilter}
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
