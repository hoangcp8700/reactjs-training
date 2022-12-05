import styled from "@emotion/styled";
import Button from "components/atoms/Button";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import React from "react";
import { renderMoney } from "utils/functions";

export interface CartOrderCheckoutProps {
  price?: number;
  count?: number;
  priceOrigin?: number;
}

const Sticky = styled("div")`
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
`;

const Row = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const CartOrderCheckout: React.FC<CartOrderCheckoutProps> = ({ count, price, priceOrigin }) => (
  <Sticky>
    <Container>
      <div className='bg-white shadow-lg overflow-hidden px-6 sm:px-8 pt-4 pb-6 sm:pb-4 rounded-t-xl flex flex-col items-end'>
        <Text className='text-sm'>Đã chọn ({count}) sản phẩm</Text>

        {priceOrigin && price && priceOrigin > 0 ? (
          <Row>
            <Text className='text-sm'>Tiết kiệm</Text>
            <Text className='text-sm line-through !text-gray-400 ml-2'>
              {renderMoney(priceOrigin - price, ",", "đ")}
            </Text>
          </Row>
        ) : undefined}

        <Row className='checkout'>
          <Text>Tổng thanh toán:</Text>
          <Text className='text-lg !text-red-500 font-semibold ml-2'>
            {renderMoney(price || 0, ",", "đ")}
          </Text>
        </Row>

        <div className='mt-4'>
          <Button variants='primary'>
            <Text className='!text-white'>CHỐT ĐƠN</Text>
          </Button>
        </div>
      </div>
    </Container>
  </Sticky>
);

export default CartOrderCheckout;
