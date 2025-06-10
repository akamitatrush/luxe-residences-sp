
import React from 'react';
import { Property } from '../data/propertyData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { X, MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, isOpen, onClose }) => {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-charcoal-900">
            {property.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Imagem */}
          <div className="relative">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
            {property.badge && (
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${property.badgeColor}`}>
                {property.badge}
              </div>
            )}
          </div>

          {/* Detalhes */}
          <div className="space-y-4">
            <div className="flex items-center text-charcoal-600">
              <MapPin className="w-5 h-5 mr-2 text-gold-500" />
              <span>{property.location}</span>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-charcoal-900">Especificações</h4>
              <p className="text-charcoal-600">{property.specs}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-charcoal-900">Preço</h4>
              <div>
                {property.originalPrice && (
                  <span className="text-sm text-charcoal-400 line-through mr-2">
                    {property.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-playfair font-bold text-gold-600">
                  {property.price}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-charcoal-900">Categoria</h4>
              <span className="inline-block px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm">
                {property.category}
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                Agendar Visita
              </Button>
              <Button variant="outline" className="w-full border-gold-500 text-gold-600 hover:bg-gold-50">
                Solicitar Informações
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
