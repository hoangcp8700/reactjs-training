// import Button from "components/atoms/Button";
// import Text from "components/atoms/Text";
// import Container from "components/common/Container";
// import React from "react";
// import { renderMoney } from "utils/functions";

// export interface CartOrderCheckoutProps {
//   price?: number;
//   count?: number;
//   priceOrigin?: number;
//   onOpenVoucher?: () => void;
// }

// const CartOrderCheckout: React.FC<CartOrderCheckoutProps> = ({
//   count,
//   price,
//   priceOrigin,
//   onOpenVoucher,
// }) => (
//   <div className='t-cartOrder_wrapCheckout'>
//     <Container modifiers={["noPaddingTop", "noPaddingBottom"]}>
//       <div className='t-cartOrder_checkout-body'>
//         <div className='t-cartOrder_checkout-row voucher'>
//           <div className='t-cartOrder_checkout-col'>
//             <div className='t-cartOrder_checkout-row'>
//               <div className='t-cartOrder_checkout-col'>
//                 <Text modifiers={["fs14", "raisinBlack07"]}>Đã chọn ({count}) sản phẩm</Text>
//               </div>
//             </div>
//           </div>
//           <div className='t-cartOrder_checkout-col'>
//             <div className='t-cartOrder_checkout-row'>
//               <div className='t-cartOrder_checkout-col'>
//                 <Text modifiers={["fs14", "raisinBlack07"]}>Shop Voucher</Text>
//               </div>
//               <div className='t-cartOrder_checkout-col'>
//                 <Button modifiers={["sm", "p0"]} onClick={onOpenVoucher}>
//                   <Text modifiers={["fs14", "vividCerulean", "underline"]}>Chọn hoặc nhập mã</Text>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {priceOrigin && price && priceOrigin > 0 ? (
//           <div className='t-cartOrder_checkout-row price'>
//             <div className='t-cartOrder_checkout-col'>
//               <Text modifiers={["fs14", "raisinBlack07"]}>Tiết kiệm</Text>
//             </div>

//             <div className='t-cartOrder_checkout-col'>
//               <Text modifiers={["fs14", "raisinBlack04", "500", "lineThrough"]}>
//                 {renderMoney(priceOrigin - price, ",", "đ")}
//               </Text>
//             </div>
//           </div>
//         ) : undefined}

//         <div className='t-cartOrder_checkout-row checkout'>
//           <div className='t-cartOrder_checkout-col'>
//             <Text modifiers={["fs16", "raisinBlack07", "500"]}>Tổng thanh toán:</Text>
//           </div>
//           <div className='t-cartOrder_checkout-col'>
//             <Text modifiers={["fs18", "electricCrimson", "500"]}>
//               {renderMoney(price || 0, ",", "đ")}
//             </Text>
//           </div>
//         </div>

//         <div className='t-cartOrder_checkout-row btn'>
//           <Button modifiers={["primary", "lg", "noneEvent"]} radius='xs'>
//             <Text modifiers={["fs16", "white"]}>CHỐT ĐƠN</Text>
//           </Button>
//         </div>
//       </div>
//     </Container>
//   </div>
// );

// export default CartOrderCheckout;
export default undefined;
