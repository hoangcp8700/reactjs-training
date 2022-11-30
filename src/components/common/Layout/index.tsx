import React from "react";
import { menuHeaderData } from "assets/dataDummy/menus";
import Header from "components/templates/Header";
import STYLES from "styles";
import styled from "@emotion/styled";

interface LayoutProps {
  children: React.ReactNode;
}

const MainWrapper = styled.main`
  padding-top: ${STYLES.VARIABLES["header-height-desktop"]}px;
  ${STYLES.BREAKPOINTS.tabletDown(`
   padding-top: ${STYLES.VARIABLES["header-height-tablet"]}px;
  `)}
`;

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header
      menus={menuHeaderData}
      logo={{
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png",
        alt: "logo",
        link: "/",
      }}
    />
    <MainWrapper>{children}</MainWrapper>
    <footer>
      <div style={{ height: 300, background: "blue" }}>footer</div>
    </footer>
  </>
);

export default Layout;
