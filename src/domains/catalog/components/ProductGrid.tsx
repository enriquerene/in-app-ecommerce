import React from 'react';
import styled from 'styled-components';
import { Product } from '@/src/core/types/product';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
}

const ProductCard = styled.div<{ imgurl: string }>`
    background-image: ${props => `url(${props.imgurl})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

const Overlay = () => <div className="absolute inset-0 bg-black/10 group-active:bg-black/25 transition-colors"/>;

const Title = ({children}: {children: React.ReactNode}) => <h3 className="text-white text-[10px] font-medium truncate leading-none mb-0.5">{children}</h3>;

const Price = ({children}: {children: React.ReactNode}) => <p className="text-white text-[12px] font-bold leading-none">{children}</p>;

export const ProductGrid: React.FC<ProductGridProps> = ({products}) => {
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {products.map((product) => (
        <Link href={`/feed#product-${product.id}`} key={product.id} scroll={false}>
          <ProductCard imgurl={product.imageUrl} className="aspect-square relative group cursor-pointer overflow-hidden">
              <Overlay />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 pt-6 flex flex-col justify-end">
                <Title>{product.name}</Title>
                <Price>${product.price.toLocaleString()}</Price>
              </div>
          </ProductCard>
        </Link>
      ))}
    </div>
  );
};