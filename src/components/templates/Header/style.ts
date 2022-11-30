import styled from "@emotion/styled";
import STYLES from "styles";

export const HeaderBody = styled.div`
  background-color: ${STYLES.COLORS.white};
  height: ${STYLES.VARIABLES["header-menu-desktop"]}px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  ${STYLES.BREAKPOINTS.desktopDown(`
    height: ${STYLES.VARIABLES["header-menu-tablet"]}px;
  `)}
`;


