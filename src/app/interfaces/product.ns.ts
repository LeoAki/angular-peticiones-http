export namespace ProductNs {

  export interface Dimensiones {
    width: number;
    height: number;
    depth: number;
  }

  export interface Reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }

  export interface all {
    products: Item[];
  }

  export interface Item {
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
    dimensions: Dimensiones;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Dimensiones[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    images: string[];
    thumbnail: string;
  }

  export interface SearchProduct {
    products: Item[];
    total: number;
    skip: number;
    limit: number;
  }

  export interface SearchProductsParams {
    q: string;
  }

}
