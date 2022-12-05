import styled from "@emotion/styled";
import CartContainer from "containers/Cart";
import React from "react";
import STYLES from "styles";

const MainWrapper = styled.div`
  height: calc(100vh - ${STYLES.VARIABLES["header-height-desktop"]}px);
  ${STYLES.BREAKPOINTS.tabletDown(`
  height: calc(100vh - ${STYLES.VARIABLES["header-height-tablet"]}px);
  `)}
`;

const Cart: React.FC = () => (
  <MainWrapper className='p-carts overflow-y-auto r bg-gray-300/70'>
    <CartContainer />
  </MainWrapper>
);

export default Cart;
