import Loading from "components/atoms/Loading";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import useScrollInfinite from "hooks/useScrollInfinite";
import React from "react";

import CartSectionItem, {
  CartSectionItemProps,
  ItemActiveProps,
} from "./components/CartSectionItem";

export interface CartOrderProps {
  list?: CartSectionItemProps[];
  paginate?: {
    noData: string;
    loading?: boolean;
    onMore?: () => void;
  };
  onSelect?: (id: string, list: ItemActiveProps[]) => void;
  onChangeQuantity?: (id: string, itemID: string, quantity: number) => void;
}

const CartOrder: React.FC<CartOrderProps> = ({ list, paginate, onSelect, onChangeQuantity }) => {
  const { setNode } = useScrollInfinite(paginate?.onMore);

  return (
    <div className='t-cartOrder bg-gray-300/70'>
      <Container>
        <div className='t-cartOrder_wrapper'>
          <div className='t-cartOrder_wrapCarts relative'>
            {list && list.length > 0 ? (
              <>
                {list.map((ele, idx) => (
                  <CartSectionItem
                    {...ele}
                    key={`cartOrder-section-${idx.toString()}`}
                    onSelect={onSelect}
                    onChangeQuantity={onChangeQuantity}
                  />
                ))}
                {paginate?.loading && <Loading />}
                {paginate?.onMore && (
                  <div
                    className='w-fit mt-8 mx-auto'
                    ref={(suggest) => {
                      setNode(suggest);
                    }}
                  />
                )}
              </>
            ) : (
              <div>
                <Text>{paginate?.noData}</Text>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CartOrder;
