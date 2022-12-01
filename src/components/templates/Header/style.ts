import styled from "@emotion/styled";
import STYLES from "styles";

export const HeaderBody = styled.div`
  height: ${STYLES.VARIABLES["header-menu-desktop"]}px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  ${STYLES.BREAKPOINTS.tabletDown(`
    height: ${STYLES.VARIABLES["header-menu-tablet"]}px;
  `)}
`;
