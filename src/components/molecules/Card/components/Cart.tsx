import clsx from "clsx";
import IconButton from "components/atoms/IconButton";
import Image, { ImageProps } from "components/atoms/Image";
import Link from "components/atoms/Link";
import Quantity from "components/atoms/Quantity";
import Skeleton from "components/atoms/Skeleton";
// import Skeleton from "components/atoms/Skeleton";
import Text from "components/atoms/Text";
import React from "react";
import { renderMoney } from "utils/functions";

export interface CardCartProps {
  id: string;
  thumbnail: ImageProps;
  title: LinkType;
  price: number;
  priceOrigin?: number;
  quantity?: number;
  size?: string;
  color?: string;
}
export interface CardCartWrapperProps extends CardCartProps {
  handleQuantity?: (quantity: number, id?: string) => void;
  handleDelete?: (id: string) => void;
}
export const SkeletonCardCart: React.FC = () => (
  <div className={clsx("w-full")}>
    <div className='flex relative flex-col sm:flex-row'>
      <div className='h-fit mr-4 max-w-[100px] sm:max-w-[120px] relative w-full shrink-0 flex items-stretch '>
        <div className='rounded-lg shrink-0 overflow-hidden transition duration-300 ease-in-out w-full'>
          <Skeleton ratio={[3, 4]} radius='16px' />
        </div>
        <div className='rounded-[32px] min-w-[22px] absolute lef-[-4px] top-[-4px]'>
          <Skeleton width='22px' height='22px' variant='circle' />
        </div>
      </div>
      <div className='flex items-start justify-between flex-col w-full'>
        <div className='w-full mt-4 text-center sm:mt-0 sm:text-left'>
          <div className='pr-6 w-full'>
            <Skeleton width='50%' height='18px' />
          </div>

          <div className='mt-1 flex items-center justify-center sm:justify-start'>
            <Skeleton width='16px' height='16px' variant='circle' />

            <div className="not-first:ml-4 not-first:relative not-first:after:content-[''] not-first:after:absolute not-first:after:left-[-8px] not-first:after:top-[15%] not-first:after:w-[1px] not-first:after:h-[70%] not-first:after:bg-gray-300">
              <Skeleton width='50px' height='18px' spacing='0 0 4px' />
            </div>
            <div />
          </div>
        </div>
        <div className='mt-2 w-full flex justify-between items-center'>
          <Skeleton width='100px' height='40px' spacing='16px 0 0' />

          {/* // price */}
          <div>
            <Skeleton width='80px' height='18px' className='mb-2' />
            <Skeleton width='80px' height='18px' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CardCart: React.FC<CardCartWrapperProps> = ({
  id,
  thumbnail,
  title,
  price,
  priceOrigin,
  quantity,
  size,
  color,
  handleDelete,
  handleQuantity,
}) => (
  <div className={clsx("w-full")}>
    <div className='flex relative flex-col sm:flex-row'>
      <div className='h-fit mr-4 max-w-[100px] sm:max-w-[120px] relative w-full shrink-0 flex items-stretch '>
        <div className='rounded-lg shrink-0 overflow-hidden transition duration-300 ease-in-out w-full'>
          <Image {...thumbnail} ratio={[3, 4]} />
        </div>
        {quantity && (
          <div className='rounded-[32px] min-w-[22px] absolute lef-[-4px] top-[-4px]'>
            <div className='bg-gray-700 rounded-[32px] py-[2px] px-1 adjust-flex-center'>
              <Text className='text-xs font-semibold !text-white'>{quantity}</Text>
            </div>
          </div>
        )}
      </div>
      <div className='flex items-start justify-between flex-col w-full'>
        <div className='w-full mt-4 text-center sm:mt-0 sm:text-left'>
          <div className='pr-6 w-full'>
            <Link target={title?.target} href={title?.href}>
              <Text className='tex-sm font-bold line-clamp-3'>{title.text}</Text>
            </Link>
          </div>
          {handleDelete && (
            <div className='absolute right-0 top-1'>
              <IconButton
                // iconName='removeBlack'
                iconName='close'
                size={16}
                buttonProps={{
                  onClick: () => handleDelete(id),
                }}
              />
            </div>
          )}
          <div className='mt-1 flex items-center justify-center sm:justify-start'>
            {color && (
              <div
                style={{ background: color }}
                className='border-1 border-gray-300 rounded-full shrink-0 w-3 h-3 sm:w-4 sm:h-4'
              />
            )}
            {size && (
              <div className="not-first:ml-4 not-first:relative not-first:after:content-[''] not-first:after:absolute not-first:after:left-[-8px] not-first:after:top-[15%] not-first:after:w-[1px] not-first:after:h-[70%] not-first:after:bg-gray-300">
                <Text className='text-xs'>Size: {size}</Text>
              </div>
            )}
          </div>
        </div>
        <div className='mt-2 w-full flex justify-between items-center'>
          {handleQuantity && (
            <div className='mr-2'>
              <Quantity id={`quantity-${id}`} value={quantity} onChange={handleQuantity} />
            </div>
          )}
          {/* // price */}
          <div>
            <Text>{renderMoney(price, ".", "đ")}</Text>
            {priceOrigin && (
              <Text className='!text-gray-400 line-through'>
                {renderMoney(priceOrigin, ".", "đ")}
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardCart;
