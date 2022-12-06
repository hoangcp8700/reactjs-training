import React, { useEffect } from "react";
import { menuHeaderData } from "assets/dataDummy/menus";
import Header from "components/templates/Header";
import STYLES from "styles";
import styled from "@emotion/styled";
import useAuth from "hooks/useAuth";
// import useAuth from "hooks/useAuth";

interface LayoutProps {
  children: React.ReactNode;
}

const MainWrapper = styled.main`
  padding-top: ${STYLES.VARIABLES["header-height-desktop"]}px;
  ${STYLES.BREAKPOINTS.tabletDown(`
   padding-top: ${STYLES.VARIABLES["header-height-tablet"]}px;
  `)}
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { handleProfile } = useAuth();

  useEffect(() => {
    // Call when first page reload
    handleProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
    </>
  );
};

export default Layout;
