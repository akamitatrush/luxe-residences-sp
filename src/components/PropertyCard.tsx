
import React from 'react';
import { Property } from '../data/propertyData';

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <div
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
  );
};

export default PropertyCard;
