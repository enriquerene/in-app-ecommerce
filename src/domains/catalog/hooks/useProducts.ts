import { useProductContext } from "@/src/providers/ProductProvider";

export const useProducts = () => {
  const { products, isLoading, error, refreshProducts } = useProductContext();
  
  return {
    products,
    isLoading,
    error,
    refreshProducts,
  };
};
