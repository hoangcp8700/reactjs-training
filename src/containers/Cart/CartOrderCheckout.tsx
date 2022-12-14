import CartOrderCheckout, {
  CartOrderCheckoutProps,
} from "components/templates/CartOrder/components/Checkout";
import React from "react";

const CartOrderCheckoutContainer: React.FC<CartOrderCheckoutProps> = (props) => (
  <CartOrderCheckout {...props} />
);

export default CartOrderCheckoutContainer;
