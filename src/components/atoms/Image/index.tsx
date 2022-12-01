import React, { useMemo } from "react";
import useDeviceQueries from "hooks/useDeviceQueries";
import clsx from "clsx";
import STYLES from "styles";
import styled from "@emotion/styled";

export type ImageWrapperStyleProps = {
  ratio?: [number, number]; // [width, height] => [4,3]
};

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> &
  ImageWrapperStyleProps &
  ImageType & {
    loading?: "lazy" | "eager" | undefined;
    classNameWrapper?: string;
    className?: string;
  };

// style
const ImageWrapper = styled.div<ImageWrapperStyleProps>((props) => ({
  paddingBottom: props?.ratio
    ? STYLES.MIXINS.aspectRatio(props?.ratio[0], props?.ratio[1])
    : "100%",
}));

const Image: React.FC<ImageProps> = ({
  src = "",
  srcMobile = undefined,
  srcTablet = undefined,
  alt = "replacing",
  ratio = [1, 1],
  loading = "lazy",
  classNameWrapper,
  className,
  ...props
}) => {
  const { isMobile, isTablet } = useDeviceQueries();
  const sourceImage = useMemo(() => {
    if (isMobile) {
      return srcMobile || src;
    }
    if (isTablet) {
      return srcTablet || src;
    }
    return src;
  }, [isMobile, isTablet, src, srcMobile, srcTablet]);

  return (
    <ImageWrapper
      ratio={ratio}
      className={clsx("relative block overflow-hidden w-full", classNameWrapper)}
    >
      <img
        src={sourceImage}
        alt={alt}
        loading={loading}
        className={clsx(
          "absolute h-full w-full left-0 top-0 object-cover transition ease-in-out duration-300",
          className,
        )}
        {...props}
      />
    </ImageWrapper>
  );
};

export default React.memo(Image);
