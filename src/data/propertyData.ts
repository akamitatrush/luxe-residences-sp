
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
    name: 'Apartamento Palazzo Morumbi',
    location: 'Morumbi, São Paulo',
    price: 'R$ 18.500.000',
    specs: '5 suítes, 6 banheiros, 860m²',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-slate-600',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Morumbi'
  },
  {
    id: 2,
    name: 'Penthouse Moema Premium',
    location: 'Moema, São Paulo',
    price: 'R$ 28.500.000',
    specs: '4 suítes master, 6 banheiros, 650m²',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-slate-600',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Moema'
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
    id: 5,
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
    id: 6,
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
    id: 7,
    name: 'Apartamento Vila Nova Conceição Elite',
    location: 'Vila Nova Conceição, São Paulo',
    price: 'R$ 25.200.000',
    specs: '4 suítes master, 5 banheiros, 720m²',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-slate-600',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Vila Nova Conceição'
  },
  {
    id: 8,
    name: 'Apartamento Itaim Bibi Luxo',
    location: 'Itaim Bibi, São Paulo',
    price: 'R$ 19.800.000',
    specs: '5 suítes, 6 banheiros, 680m²',
    badge: 'OPORTUNIDADE',
    badgeColor: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Itaim Bibi'
  },
  {
    id: 9,
    name: 'Residencial Jardim Guedala Tower',
    location: 'Jardim Guedala, São Paulo',
    price: 'A partir de R$ 10.900.000',
    specs: '348m² | 376m² | 393m² | 700m² - Entrega Dezembro 2029',
    badge: 'NOVO',
    badgeColor: 'bg-green-500',
    image: '/lovable-uploads/4ec7e388-a1d8-4943-ade7-753579181003.png',
    category: 'Morumbi'
  }
];

export const filters = ['Todos', 'Jardins', 'Moema', 'Morumbi', 'Vila Nova Conceição', 'Itaim Bibi'];
