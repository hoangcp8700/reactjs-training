import Heading from "components/atoms/Heading";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import Card from "components/molecules/Card";
import { CardProductProps } from "components/molecules/Card/components/Product";
import React from "react";
import LazyLoad from "react-lazy-load";

export interface ProductSimilarProps {
  title: string;
  link: LinkType;
  lists: CardProductProps[];
  loading?: boolean;
  onMore?: () => void;
}

const ProductSimilar: React.FC<ProductSimilarProps> = ({ title, link, lists }) => (
  <div className='t-productSimilar mt-10'>
    <Container>
      <div className='flex justify-between items-center sm:px-2 mb-2'>
        <div className='mr-4'>
          <Heading className='uppercase'>{title}</Heading>
        </div>

        <Link href={link.href} target={link.target}>
          <Text className='text-sm !text-blue-700 underline whitespace-nowrap'>{link.text}</Text>
        </Link>
      </div>
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {lists.map((ele, idx) => (
          <LazyLoad height={300} offset={100} key={`productSimilar-product-item-${idx.toString()}`}>
            <div className='flex h-full'>
              <Card.Product {...ele} />
            </div>
          </LazyLoad>
        ))}
      </div>
    </Container>
  </div>
);

export default ProductSimilar;
