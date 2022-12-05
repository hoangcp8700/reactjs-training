import React, { useCallback, useMemo, useState } from "react";
import { ItemActiveProps } from "components/templates/CartOrder/components/CartSectionItem";

import CartOrderWrapperContainer from "./CartOrderContainer";
import ProductSimilarContainer from "./ProductSimilarContainer";
import CartOrderCheckoutContainer from "./CartOrderCheckout";

interface CartContainerProps {}

interface CartsListState {
  [sectionID: string]: ItemActiveProps[];
}

const initState = { count: 0, price: 0, priceOrigin: 0 };

const CartContainer: React.FC<CartContainerProps> = () => {
  const [carts, setCarts] = useState<CartsListState>();

  const cartsPrice = useMemo(() => {
    if (carts) {
      return Object.keys(carts)
        .map((key) =>
          carts[key].reduce(
            (acc, cur) => ({
              count: carts[key].length,
              price: cur.price * (cur?.quantity || 1) + acc.price,
              priceOrigin:
                (cur?.priceOrigin ? cur.priceOrigin * (cur?.quantity || 0) : 0) + acc.priceOrigin,
            }),
            initState,
          ),
        )
        .reduce(
          (acc, cur) => ({
            count: cur.count + acc.count,
            price: cur.price + acc.price,
            priceOrigin: (cur?.priceOrigin || 0) + acc.priceOrigin,
          }),
          initState,
        );
    }
    return initState;
  }, [carts]);

  const handleCalculationCarts = useCallback(
    (id: string, list: ItemActiveProps[]) => {
      const abc = { ...carts, [id]: list };
      setCarts(abc);
      console.log(carts, id, list, abc);
    },
    [carts],
  );

  const handleChangeQuantity = useCallback(
    (id: string, itemID: string, quantity: number) => {
      console.log("runn", carts);
      // TODO: WIP

      if (carts) {
        const getIndex = carts[id].findIndex((ele) => ele.id === itemID);
        if (getIndex !== -1) {
          const newCarts = { ...carts };
          newCarts[id][getIndex].quantity = quantity;
          return setCarts(newCarts);
        }
      }
      return undefined;
    },
    [carts],
  );

  return (
    <>
      {/* <HeroBanner banners={bannerCarts} /> */}
      <CartOrderWrapperContainer
        onSelect={handleCalculationCarts}
        onChangeQuantity={handleChangeQuantity}
      />

      <CartOrderCheckoutContainer
        count={cartsPrice.count}
        price={cartsPrice.price}
        priceOrigin={cartsPrice.priceOrigin}
      />

      <ProductSimilarContainer />
    </>
  );
};

export default CartContainer;
