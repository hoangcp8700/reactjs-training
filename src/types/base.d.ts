type OptionType = {
  value: string;
  label: string;
  id?: number | string;
  url?: string;
};

type LinkType = {
  url: string;
  text?: string;
  target?: string;
};

type ImageType = {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
  alt: string;
};
