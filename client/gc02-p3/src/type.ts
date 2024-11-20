export type product = {
  _id:string
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
};

export type wishCard = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  products: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
  }[];
};

