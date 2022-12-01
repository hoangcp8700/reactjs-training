import clsx from "clsx";
import Button from "components/atoms/Button";
import CheckboxCustom from "components/atoms/CheckboxCustom";
import Heading from "components/atoms/Heading";
import IconButton from "components/atoms/IconButton";
import Image from "components/atoms/Image";
import Quantity from "components/atoms/Quantity";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import React, { useEffect, useState } from "react";
import { Scrollbar } from "styles/components";
import { renderMoney } from "utils/functions";

import { PropertyHeading, PropertyLabel, PropertyList } from "./style";

interface ProductDetailProps {
  title: string;
  subTitle?: string;
  price?: number;
  priceSale?: number;
  thumbnail: ImageType;
  favorite?: boolean;
  stock?: number;
  reviews?: {
    count: number;
    title?: string;
    prefix?: React.ReactNode;
    active?: boolean;
  }[];
  colorsProps?: {
    list: ColorType[];
    active?: ColorType;
    handleChange?: (color: ColorType) => void;
  };
  sizesProps?: {
    list: string[];
    active: number;
    handleChange?: (index: number) => void;
  };
  handleFavorite?: () => void;
  handleAddCart?: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  subTitle,
  price,
  priceSale,
  thumbnail,
  favorite,
  stock,
  reviews,
  colorsProps,
  sizesProps,
  handleFavorite,
  handleAddCart,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorite) {
      setIsFavorite(true);
    }
  }, [favorite]);

  return (
    <Container className='t-productDetail mt-10'>
      <div className='relative grid grid-cols-12'>
        <div className='wrapLeft col-span-12 md:col-span-6 md:min-w-[370px] order-last md:order-first md:pr-6'>
          <Heading className='text-black'>{title}</Heading>

          <div className='mt-2'>
            <Text className='sm:text-lg font-semibold text-gray-900/50' content={subTitle} />
          </div>

          {/* // reviews */}
          {reviews && reviews.length > 0 && (
            <Scrollbar className='flex items-center bg-gray-300/20 rounded-md mt-3 overflow-x-auto pt-2 pb-3 px-3'>
              {reviews.map((ele, idx) => (
                <div
                  className='flex items-center not-first:ml-6'
                  key={`product-review-item-${idx.toString()}`}
                >
                  <Text className='text-sm font-semibold cursor-pointer border-b-2 border-gray-400 hover:border-blue-500 hover:text-blue-500'>
                    {ele.count}
                  </Text>
                  {ele?.title && (
                    <div className='ml-1 whitespace-nowrap'>
                      <Text className='text-sm'>{ele.title}</Text>
                    </div>
                  )}
                  {ele?.prefix && <div className='ml-1 whitespace-nowrap'>{ele.prefix}</div>}
                </div>
              ))}
            </Scrollbar>
          )}

          {/* // prices */}
          <div className='flex items-center mt-2'>
            <div>
              <IconButton
                size={20}
                iconName={isFavorite ? "heartFill" : "heart"}
                className={isFavorite ? "animate-[tick_150ms_ease-in-out]" : ""}
                buttonProps={{
                  onClick: () => {
                    setIsFavorite(!isFavorite);
                    if (handleFavorite) {
                      handleFavorite();
                    }
                  },
                }}
              />
            </div>
            <div className='ml-2'>
              <Text className='text-sm sm:text-xl line-through italic'>
                {renderMoney(price, ".", "đ")}
              </Text>
            </div>
            <div className='ml-2'>
              <Text className='text-sm sm:text-xl font-bold'>
                {renderMoney(priceSale, ".", "đ")}
              </Text>
            </div>
          </div>

          {/* wrapProperties:colors, size */}
          {(colorsProps || sizesProps) && (
            <div className='my-8 mx-2'>
              {/* color */}
              {colorsProps && colorsProps.list.length > 0 && (
                // productDetail_properties
                <div>
                  <PropertyHeading>
                    <Text className='text-sm'>Màu sắc</Text>
                    {colorsProps?.active && (
                      <PropertyLabel>
                        <Text className='text-sm font-semibold'>{colorsProps.active.label}</Text>
                      </PropertyLabel>
                    )}
                  </PropertyHeading>
                  <PropertyList>
                    {colorsProps.list.map((ele, idx) => (
                      <div key={`color-item-${idx.toString()}`} className='p-1'>
                        <CheckboxCustom
                          type='radio'
                          id={`color-item-${idx.toString()}`}
                          name='color'
                          onChange={() => colorsProps.handleChange && colorsProps.handleChange(ele)}
                          className={clsx(
                            "rounded-md border-2 w-[56px] h-[32px] hover:border-4",
                            colorsProps?.active &&
                              colorsProps.active.code === ele.code &&
                              "!border-4 border-blue-400 animate-[tick_150ms_ease-in-out]",
                          )}
                        >
                          <div style={{ background: ele.code }} className='w-full h-full' />
                        </CheckboxCustom>
                      </div>
                    ))}
                  </PropertyList>
                </div>
              )}

              {/* sizes */}
              {sizesProps && sizesProps.list.length > 0 && (
                <div className='mt-2'>
                  <PropertyHeading>
                    <Text className='text-sm'>Kích thước</Text>
                    {sizesProps.active !== -1 && (
                      <PropertyLabel>
                        <Text className='text-sm font-semibold text-black'>
                          {sizesProps.list[sizesProps.active]}
                        </Text>
                      </PropertyLabel>
                    )}
                  </PropertyHeading>
                  <PropertyList>
                    {sizesProps.list.map((ele, idx) => (
                      <div key={`size-item-${idx.toString()}`} className='p-1'>
                        <Button
                          variants={idx === sizesProps.active ? "primary" : "outlined"}
                          className={
                            idx === sizesProps.active ? "animate-[tick_150ms_ease-in-out]" : ""
                          }
                          onClick={() => sizesProps.handleChange && sizesProps.handleChange(idx)}
                        >
                          <Text
                            className={clsx("text-sm", idx === sizesProps.active && "!text-white")}
                          >
                            {ele}
                          </Text>
                        </Button>
                      </div>
                    ))}
                  </PropertyList>
                </div>
              )}
            </div>
          )}

          {/* quantity */}
          <div>
            <div className='bg-gray-100 shadow-sm mt-2 rounded-lg py-2 pl-4 pr-8 w-fit'>
              <Text className='text-sm font-semibold'>Số lượng</Text>
              <div className='mt-1 sm:mt-2'>
                <Quantity />
              </div>
            </div>
            {stock && (
              <div className='mb-1/2 ml-2'>
                <Text className='text-sm'>{stock} sản phẩm có sẵn </Text>
              </div>
            )}
          </div>

          <div className='mt-6 max-w-[270px]'>
            <Button variants='primary'>
              <Text className='text-sm font-bold uppercase !text-white'>Mua ngay</Text>
            </Button>
          </div>
        </div>
        {/* //t-productDetail_wrapRight */}
        <div className='wrapRight relative col-span-12 md:col-span-6 pb-6 md:pb-0'>
          <div
            className='absolute left-3 top-3 z-2'
            aria-hidden
            role='button'
            onClick={handleAddCart}
          >
            <IconButton
              iconName='cartAdd'
              buttonProps={{ className: "bg-pink-600 founded-full cursor-pointer !h-[48px]" }}
            />
          </div>
          <div className='rounded-full md:rounded-lg relative max-w-[50%] md:max-w-full mx-auto overflow-hidden'>
            <Image src={thumbnail.src} alt={thumbnail.alt} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
