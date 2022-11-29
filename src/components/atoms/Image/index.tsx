import React, { useMemo } from "react";
import useDeviceQueries from "hooks/useDeviceQueries";
import clsx from "clsx";

import { ImageProps } from "./type";
import ImageWrapper from "./style";

const Image: React.FC<ImageProps> = ({
  src = "",
  srcMobile = undefined,
  srcTablet = undefined,
  alt = "replacing",
  ratio = [1, 1],
  loading = "lazy",
  classNameWrapper,
  className,
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
      className={clsx(
        "relative block overflow-hidden w-full ease-in-out duration-300",
        classNameWrapper,
      )}
    >
      <img
        src={sourceImage}
        alt={alt}
        loading={loading}
        className={clsx("absolute h-full w-full left-0 top-0 object-cover", className)}
      />
    </ImageWrapper>
  );
};

export default React.memo(Image);
