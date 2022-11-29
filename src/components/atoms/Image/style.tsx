import styled from "@emotion/styled";
import STYLES from "styles";

import { ImageWrapperStyleProps } from "./type";

const ImageWrapper = styled.div<ImageWrapperStyleProps>((props) => ({
  paddingBottom: props?.ratio
    ? STYLES.MIXINS.aspectRatio(props?.ratio[0], props?.ratio[1])
    : "100%",
}));

export default ImageWrapper;
