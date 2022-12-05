import CartOrder, { CartOrderProps } from "components/templates/CartOrder";
import React from "react";
import { IMAGE_DUMMY } from "utils/constants";

const CartOrderContainer: React.FC<CartOrderProps> = (props) => (
  <CartOrder
    {...props}
    list={new Array(5).fill(true).map((_, index) => ({
      id: `store-${index + 1}`, // TODO: edit later
      title: {
        text: `Cửa hàng ${index + 1}`,
        href: "/",
        target: "_self",
      },
      carts: {
        list: new Array(5).fill(true).map((__, idx) => ({
          id: `store-${index + 1}-cart-${idx + 1}`, // TODO: edit later
          thumbnail: {
            alt: "card",
            src: IMAGE_DUMMY,
          },
          title: {
            text: `${
              idx + 1
            } New Balance 67/212 Men's Sneakers - Mindful Grey New Balance 67/212 Men's Sneakers`,
            href: "/",
            target: "_self",
          },
          size: "XL",
          color: "#fafa",
          priceOrigin: 600000,
          price: 500000,
          quantity: idx + 12,
          // handleQuantity: (value, id) => console.log("quantity", value, id, `store-${index + 1}`),
          // handleDelete: (id) => console.log("delete", id),
        })),
        paginate: {
          loading: true,
          onMore: (id: string) => console.log("more item of shop:", id),
        },
      },
    }))}
    paginate={{
      loading: false,
      noData: "Không có sản phẩm nào trong giỏ hàng",
      onMore: () => console.log("more shop"),
    }}
  />
);

export default CartOrderContainer;
