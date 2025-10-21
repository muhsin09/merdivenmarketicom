export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: {
    material: string;
    finish: string;
    loadCapacity: string;
    warranty: string;
  };
  price: string;
  featured: boolean;
  images: string[];
}

