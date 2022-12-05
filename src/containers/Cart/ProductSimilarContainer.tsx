import ProductSimilar from "components/templates/ProductSimilar";
import React from "react";
import { IMAGE_DUMMY } from "utils/constants";

const ProductSimilarContainer: React.FC = () => (
  <ProductSimilar
    title='Có thể bạn cũng muốn mua'
    link={{
      text: "Xem tất cả",
      href: "/",
      target: "_seft",
    }}
    lists={new Array(20).fill(true).map(() => ({
      thumbnail: {
        alt: "card",
        src: IMAGE_DUMMY,
      },
      title: {
        text: "New Balance 67/212 Men's Sneakers - Mindful Grey New Balance 67/212 Men's Sneakers",
        href: "/",
        target: "_self",
      },
      sales: [
        { label: "Giảm 30%" },
        { label: "Free ship", style: { background: "#fafa", color: "#000" } },
      ],
      originPrice: 1000000,
      price: 900000,
    }))}
  />
);

export default ProductSimilarContainer;
