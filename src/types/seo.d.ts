type SEOData = {
  title: string;
  description: string;
  keyword: string;
  imgSrc?: string;
};

type OGData = {
  ogTitle?: string;
  ogImage?: string;
  ogDescription?: string;
  ogUrl?: string;
};

type ConfigData = {
  logo?: string;
  themeColor?: string;
};

type SEOType = {
  seoData?: SEOData;
  ogData?: OGData;
  config?: ConfigData;
};
