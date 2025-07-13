
export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  originalPrice?: string;
  specs: string;
  badge: string;
  badgeColor: string;
  image: string;
  category: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: 'Apartamento Jardins Époque',
    location: 'Jardins, São Paulo',
    price: 'R$ 12.900.000',
    specs: '4 suítes, 5 banheiros, 580m²',
    badge: 'TOP VENDAS',
    badgeColor: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Jardins'
  },
  {
    id: 2,
    name: 'Apartamento Palazzo Morumbi',
    location: 'Morumbi, São Paulo',
    price: 'R$ 18.500.000',
    specs: '5 suítes, 6 banheiros, 860m²',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-accent',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    badgeColor: 'bg-accent',
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

export const filters = ['Todos', 'Jardins', 'Moema', 'Morumbi', 'Alphaville'];
