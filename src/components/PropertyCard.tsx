
import React from 'react';
import { Property } from '../data/propertyData';
import { MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  index: number;
  onClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {property.badge && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${property.badgeColor}`}>
            {property.badge}
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Ver Detalhes
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-charcoal-900 mb-2">
          {property.name}
        </h3>
        
        <div className="flex items-center text-charcoal-600 mb-3">
          <MapPin className="w-4 h-4 mr-2 text-accent" />
          <span>{property.location}</span>
        </div>
        
        <p className="text-sm text-charcoal-500 mb-4">{property.specs}</p>
        
        <div className="flex items-center justify-between">
          <div>
            {property.originalPrice && (
              <span className="text-sm text-charcoal-400 line-through mr-2">
                {property.originalPrice}
              </span>
            )}
            <span className="text-2xl font-playfair font-bold text-accent">
              {property.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
