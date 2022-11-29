export type ImageWrapperStyleProps = {
  ratio?: [number, number]; // [width, height] => [4,3]
};

export type ImageProps = ImageWrapperStyleProps &
  ImageType & {
    loading?: "lazy" | "eager" | undefined;
    classNameWrapper?: string;
    className?: string;
  };
