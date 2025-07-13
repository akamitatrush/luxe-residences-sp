
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
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-lg group"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover transition-all duration-300"
        />
        
        {property.badge && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${property.badgeColor}`}>
            {property.badge}
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold border border-gray-200 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Ver Detalhes
          </button>
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
          {property.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-5 h-5 mr-3 text-gray-400" />
          <span className="font-medium">{property.location}</span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{property.specs}</p>
        
        <div className="flex items-center justify-between">
          <div>
            {property.originalPrice && (
              <span className="text-sm text-gray-400 line-through mr-3">
                {property.originalPrice}
              </span>
            )}
            <span className="text-3xl font-playfair font-bold text-gray-900">
              {property.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
