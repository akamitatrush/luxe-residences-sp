
import React, { useState } from 'react';
import { Search, Grid, List, Filter, MapPin, Bed, Bath, Square, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties, filters } from '../data/propertyData';
import { Property } from '../data/propertyData';
import { usePropertyFilter } from '../hooks/usePropertyFilter';
import PropertyCard from '../components/PropertyCard';
import PropertyFilters from '../components/PropertyFilters';
import PropertyModal from '../components/PropertyModal';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../components/ui/pagination';

const Properties = () => {
  const { activeFilter, filteredProperties, handleFilterClick } = usePropertyFilter(properties);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtrar propriedades por busca
  const searchFilteredProperties = filteredProperties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Debug logs para verificar o que está acontecendo
  console.log('filteredProperties length:', filteredProperties.length);
  console.log('searchTerm:', searchTerm);
  console.log('searchFilteredProperties length:', searchFilteredProperties.length);

  // Ordenar propriedades
  const sortedProperties = [...searchFilteredProperties].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
    const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
    
    switch (sortBy) {
      case 'price-asc':
        return priceA - priceB;
      case 'price-desc':
        return priceB - priceA;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Paginação
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProperties = sortedProperties.slice(startIndex, startIndex + itemsPerPage);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb e Botão Voltar */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Início
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Propriedades</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Empreendimentos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Apartamentos de alto padrão em São Paulo
          </p>
        </div>

        {/* Busca e Filtros */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por nome ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-desc">Maior preço</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="name-asc">Nome A-Z</SelectItem>
                <SelectItem value="name-desc">Nome Z-A</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="flex-1"
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="flex-1"
              >
                <List className="w-4 h-4 mr-2" />
                Lista
              </Button>
            </div>

            <div className="text-right">
              <span className="text-sm text-gray-600 font-medium">
                {sortedProperties.length} imóveis encontrados
              </span>
            </div>
          </div>

          {/* Filtros por categoria */}
          <PropertyFilters 
            filters={filters}
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
          />
        </div>

        {/* Lista de Propriedades */}
        {paginatedProperties.length > 0 ? (
          <>
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
              : "space-y-6 mb-8"
            }>
              {paginatedProperties.map((property, index) => (
                viewMode === 'grid' ? (
                  <PropertyCard 
                    key={property.id}
                    property={property}
                    index={index}
                    onClick={() => handlePropertyClick(property)}
                  />
                ) : (
                  <div
                    key={property.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                    onClick={() => handlePropertyClick(property)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                              {property.name}
                            </h3>
                            <div className="flex items-center text-gray-600 mb-3">
                              <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                              <span className="font-medium">{property.location}</span>
                            </div>
                          </div>
                          {property.badge && (
                            <div className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${property.badgeColor}`}>
                              {property.badge}
                            </div>
                          )}
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
                          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <Pagination className="mb-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum imóvel encontrado com os filtros selecionados.
            </p>
          </div>
        )}

        {/* Modal */}
        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default Properties;
