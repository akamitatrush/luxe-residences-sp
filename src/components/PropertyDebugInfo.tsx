
import React from 'react';

interface PropertyDebugInfoProps {
  activeFilter: string;
  propertiesCount: number;
}

const PropertyDebugInfo: React.FC<PropertyDebugInfoProps> = ({ 
  activeFilter, 
  propertiesCount 
}) => {
  return (
    <div className="text-center mb-4">
      <p className="text-sm text-charcoal-500">
        Filtro ativo: <strong>{activeFilter}</strong> | Apartamentos encontrados: <strong>{propertiesCount}</strong>
      </p>
    </div>
  );
};

export default PropertyDebugInfo;
