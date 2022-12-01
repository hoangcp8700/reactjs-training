import clsx from "clsx";
import Button from "components/atoms/Button";
import Icon from "components/atoms/Icon";
import Image, { ImageProps } from "components/atoms/Image";
import Link from "components/atoms/Link";
import Skeleton, { SkeletonGroup } from "components/atoms/Skeleton";
import Text from "components/atoms/Text";
import TextFadeEllipsis from "components/molecules/TextFadeEllipsis";
import React, { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { renderMoney } from "utils/functions";

import SaleTags, { SaleTagsProps } from "./SaleTags";

const defaultStyle = {
  transition: `transform 300ms ease-in-out`,
  transform: "scale(0)",
};

const transitionStyles = {
  entering: { transform: "scale(1)" },
  entered: { transform: "scale(1)" },
  exiting: { transform: "scale(0)" },
  exited: { transform: "scale(0)" },
  unmounted: { background: "red" },
};
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

export const SkeletonCardProduct: React.FC = () => (
  <div className='w-full bg-white rounded-md sm:rounded-lg overflow-hidden'>
    <SkeletonGroup>
      <SkeletonGroup spacing='0 0 8px'>
        <Skeleton ratio={[4, 3]} radius='16px' />
      </SkeletonGroup>

      <SkeletonGroup padding='0 8px 8px'>
        <SkeletonGroup isHorizontal>
          <Skeleton width='50%' height='18px' />
          <Skeleton width='40px' height='18px' spacing='0 0 0 8px' />
        </SkeletonGroup>

        <SkeletonGroup spacing='8px 0'>
          <Skeleton width='100%' height='26px' />
        </SkeletonGroup>

        <SkeletonGroup>
          <Skeleton width='80%' height='14px' />
          <Skeleton width='100%' height='14px' spacing='4px 0 0' />
        </SkeletonGroup>
      </SkeletonGroup>
    </SkeletonGroup>
  </div>
);

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
  const [isReady, setIsReady] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (favorite) {
      setIsFavorite(true);
    }
  }, [favorite]);

  return (
    <>
      {!isReady && <SkeletonCardProduct />}
      <Transition in={isReady} timeout={400}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            ref={nodeRef}
            className={clsx(
              "w-full bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-md",
              !isReady ? "absolute opacity-0" : "relative",
            )}
          >
            <div className='h-full'>
              <div className='rounded-lg sm:rounded-2xl overflow-hidden group'>
                <Link target={title?.target} href={title?.href}>
                  <Image
                    {...thumbnail}
                    ratio={[4, 3]}
                    className='group-hover:scale-150'
                    onLoad={() => setIsReady(true)}
                  />
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
                    <Text className='text-sm text-slate-800 group-hover:text-blue-600'>
                      {title.text}
                    </Text>
                  </TextFadeEllipsis>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
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
