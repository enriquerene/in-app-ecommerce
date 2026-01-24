export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  price: string;
  regularPrice?: string;
}

export interface GraphQLProductNode {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: {
    sourceUrl: string;
    altText: string;
  } | null;
  price?: string;
  regularPrice?: string;
}

export interface GetProductsResponse {
  products: {
    nodes: GraphQLProductNode[];
  };
}
