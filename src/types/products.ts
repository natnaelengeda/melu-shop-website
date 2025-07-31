export type Category = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
};

export type Images = {
  id: number;
  imageUrl: string;
  isPrimary: boolean;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  discountPrice: string;
  isDiscounted: boolean;
  isFeatured: boolean;
  stock: number;
  images: Images[] | []
  category: Category;
  createdAt: string;
};