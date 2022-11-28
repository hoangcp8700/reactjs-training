import React from "react";

interface ImageProps extends ImageType {
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export default Image;
