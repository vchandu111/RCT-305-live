export interface Category {
  id: number;
  name: string;
  image: string;
  items: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export interface Nav {
  id: number;
  title: string;
  path: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock";
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface ProductState {
  products: Array<Product>;
  status: "loading" | "succeeded" | "failed";
  error: string | null;
}
