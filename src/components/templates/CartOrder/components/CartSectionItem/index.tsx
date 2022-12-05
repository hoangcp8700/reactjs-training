import Button from "components/atoms/Button";
import Checkbox from "components/atoms/Checkbox";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import Card from "components/molecules/Card";
import { CardCartWrapperProps, SkeletonCardCart } from "components/molecules/Card/components/Cart";
import React, { useCallback, useState } from "react";
import LazyLoad from "react-lazy-load";

export interface ItemActiveProps {
  id: string;
  price: number;
  priceOrigin?: number;
  quantity?: number;
}

export interface CartSectionItemProps {
  id: string;
  title: LinkType;
  carts: {
    list: CardCartWrapperProps[];
    paginate: {
      loading?: boolean;
      onMore?: (id: string) => void;
    };
  };
  onSelect?: (id: string, list: ItemActiveProps[]) => void;
  onChangeQuantity?: (id: string, itemID: string, quantity: number) => void;
}

const CartSectionItem: React.FC<CartSectionItemProps> = ({
  title,
  id,
  carts,
  onSelect,
  onChangeQuantity,
}) => {
  const [isCheckList, setIsCheckList] = useState(false);
  const [listActive, setListActive] = useState<ItemActiveProps[]>();

  const handleListChange = useCallback(
    (value: boolean) => {
      setIsCheckList(value);

      if (value) {
        const getListID = carts.list.map((ele) => ({
          id: ele.id,
          quantity: ele.quantity,
          price: ele.price,
          priceOrigin: ele.priceOrigin,
        }));

        if (onSelect) onSelect(id, getListID);
        return setListActive(getListID);
      }
      if (onSelect) onSelect(id, []);
      return setListActive([]);
    },
    [carts, id, onSelect],
  );

  const handleItemChange = useCallback(
    (item: CardCartWrapperProps) => {
      const state = {
        id: item.id,
        price: item.price,
        priceOrigin: item.priceOrigin,
        quantity: item.quantity,
      };
      if (listActive && listActive.length) {
        const getIdx = listActive.findIndex((ele) => ele.id === state.id);
        let newActive = [];

        if (getIdx !== -1) {
          if (listActive.length === 1) setIsCheckList(false);
          newActive = listActive.filter((ele) => ele.id !== state.id);
        } else {
          newActive = [...listActive, state];
        }
        if (onSelect) onSelect(id, newActive);
        return setListActive(newActive);
      }
      if (onSelect) onSelect(id, [state]);
      setIsCheckList(true);
      return setListActive([state]);
    },
    [listActive, id, onSelect],
  );

  const activeSelect = useCallback(
    (itemID: string): boolean => {
      if (listActive && listActive.length) {
        return listActive.some((ele) => ele.id === itemID);
      }
      return false;
    },
    [listActive],
  );

  return (
    <div className='bg-white rounded-lg py-4 px-2 sm:px-8 not-first:mt-6'>
      {/* // heading */}
      <div className='flex items-center mb-4'>
        {/* // TODO: CHECK MAX-SM */}
        <div className='mr-4 max-sm:absolute max-sm:top-[25%] max-sm:translate-y-[-50%]'>
          <Checkbox
            id='cart-order-all'
            checked={isCheckList}
            onChange={() => handleListChange(!isCheckList)}
          />
        </div>
        <Link href={title.href} target={title.target}>
          <Text className='tex-xl'>{title.text}</Text>
        </Link>
      </div>
      <hr />
      {/* // list cart item */}
      <div className='m-[-12px] pt-3'>
        {carts && carts.list.length && (
          <>
            {carts.list.map((ele, idx) => (
              <LazyLoad height={180} offset={100} key={`cartOrder-section-item-${idx.toString()}`}>
                <div
                  className={`p-3 relative flex items-center not-last:before:content-[''] not-last:before:absolute not-last:before:bottom-0 not-last:before:right-0 not-last:before:left-0 not-last:before:height-[1px] not-last:before:bg-gray-200 `}
                >
                  <div className='mr-4 max-sm:absolute max-sm:top-[25%] max-sm:translate-y-[-50%]'>
                    <Checkbox
                      id='cart-order-item'
                      checked={activeSelect(ele.id)}
                      onChange={() => handleItemChange(ele)}
                    />
                  </div>

                  <Card.Cart
                    {...ele}
                    handleQuantity={(quantity) =>
                      onChangeQuantity && onChangeQuantity(id, ele.id, quantity)
                    }
                  />
                </div>
              </LazyLoad>
            ))}
            {carts.paginate.loading &&
              new Array(5).fill(true).map((_, idx) => (
                <div
                  className={`p-3 relative flex items-center not-last:before:content-[''] not-last:before:absolute not-last:before:bottom-0 not-last:before:right-0 not-last:before:left-0 not-last:before:height-[1px] not-last:before:bg-gray-200 `}
                  key={`cartOrder-section-item-skeleton-${idx.toString()}`}
                >
                  <SkeletonCardCart />
                </div>
              ))}
          </>
        )}
      </div>

      {carts.paginate.onMore && (
        <div className='w-fit mx-auto mt-8'>
          <Button
            variants='primary'
            onClick={() => carts.paginate.onMore && carts.paginate.onMore(id)}
          >
            <Text className='text-sm !text-white'>Xem thêm</Text>
          </Button>
        </div>
      )}
    </div>
  );
};
export default CartSectionItem;
