
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
      className="card-elegant cursor-pointer group"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
        />
        
        {property.badge && (
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${property.badgeColor}`}>
            {property.badge}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg flex items-end justify-center pb-6">
          <button className="btn-primary transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm">
            Ver Detalhes
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="heading-card mb-3">
          {property.name}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-2 text-accent" />
          <span className="text-subtle">{property.location}</span>
        </div>
        
        <p className="text-subtle mb-4 leading-relaxed">{property.specs}</p>
        
        <div className="flex items-center justify-between">
          <div>
            {property.originalPrice && (
              <span className="text-sm text-muted-foreground line-through mr-2">
                {property.originalPrice}
              </span>
            )}
            <span className="text-2xl font-playfair font-bold text-foreground">
              {property.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
