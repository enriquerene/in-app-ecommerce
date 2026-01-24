import { fetchGraphQL } from "@/src/core/api/graphql";
import { GetProductsResponse, Product } from "@/src/core/types/product";

const GET_PRODUCTS_QUERY = `
query GetProducts {
  products(first: 10) {
    nodes {
      id
      name
      slug
      description
      image {
        sourceUrl
        altText
      }
      ... on SimpleProduct {
        price
        regularPrice
      }
      ... on VariableProduct {
        price
        regularPrice
      }
    }
  }
}
`;

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    const data = await fetchGraphQL<GetProductsResponse>(GET_PRODUCTS_QUERY);
    
    return data.products.nodes.map((node) => ({
      id: node.id,
      name: node.name,
      slug: node.slug,
      description: node.description || "",
      imageUrl: node.image?.sourceUrl || "https://picsum.photos/400",
      price: node.price || "0",
      regularPrice: node.regularPrice,
    }));
  },
};
