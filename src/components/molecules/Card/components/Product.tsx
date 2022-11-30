import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";
import Image, { ImageProps } from "components/atoms/Image";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import TextFadeEllipsis from "components/molecules/TextFadeEllipsis";
import React, { useEffect, useState } from "react";
import { renderMoney } from "utils/functions";

import SaleTags, { SaleTagsProps } from "./SaleTags";

export interface CardProductProps extends SaleTagsProps {
  thumbnail: ImageProps;
  title: LinkType;
  price: number;
  originPrice?: number;
  favorite?: boolean;
  category?: {
    label?: string;
    value?: string;
  };
  handleFavorite?: () => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  thumbnail,
  title,
  price,
  originPrice,
  favorite,
  sales,
  handleFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorite) {
      setIsFavorite(true);
    }
  }, [favorite]);

  return (
    <div className='relative w-full bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-md'>
      <div className='h-full'>
        <div className='rounded-lg sm:rounded-2xl overflow-hidden group'>
          <Link target={title?.target} href={title?.href}>
            <Image {...thumbnail} ratio={[4, 3]} className='group-hover:scale-150' />
          </Link>

          {handleFavorite && (
            <div className='bg-white rounded-full overflow-hidden absolute right-2 top-2'>
              <Button
                className='!px-3 rounded-full'
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  handleFavorite();
                }}
              >
                <Icon
                  iconName={isFavorite ? "heartFill" : "heart"}
                  size={16}
                  className={isFavorite ? `animate-[tick_150ms_ease-in]` : ""}
                />
              </Button>
            </div>
          )}
        </div>
        <div className='mt-2 pb-4 px-2'>
          <Link target={title?.target} href={title?.href}>
            <div className='flex items-center justify-start'>
              <Text className='font-bold text-red-700'>{renderMoney(price, ".", "đ")}</Text>
              {originPrice && (
                <div className='items-center justify-center hidden sm:flex ml-2'>
                  <Text className='text-xs font-medium line-through'>
                    {renderMoney(originPrice, ".", "đ")}
                  </Text>
                </div>
              )}
            </div>
          </Link>

          {sales?.length && (
            <div className='my-1'>
              <SaleTags sales={sales} />
            </div>
          )}

          <Link target={title?.target} href={title?.href}>
            <TextFadeEllipsis className='group'>
              <Text className='text-sm text-slate-800 group-hover:text-blue-600'>{title.text}</Text>
            </TextFadeEllipsis>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

/* <Card.Product
  thumbnail={{
    alt: "card",
    src: IMAGE_DUMMY,
  }}
  title={{
    text: "New Balance 67/212 Men's Sneakers - Mindful Grey New Balance 67/212 Men's Sneakers",
    url: "/",
    target: "_self",
  }}
  sales={[
    { label: "Giảm 30%" },
    { label: "Free ship", style: { background: "#fafa", color: "#000" } },
  ]}
  price={500000}
  originPrice={1000000}
  handleFavorite={() => console.log("favorite")}
/> */
