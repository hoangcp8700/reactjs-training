export function baseStr(text?: string) {
  return text || "";
}

export function baseSlug(slug: string, isAuth?: boolean) {
  if (isAuth) {
    // return `/auth/${slug}`;
    return `/${slug}`;
  }
  return `/${slug}`;
}

export function renderMoney(val?: number, prefix?: string, unit?: string) {
  const converted = val?.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, prefix || ".");
  return unit ? `${converted} ${unit}` : converted;
}

// remove accented Vietnamese
export function removeAccents(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

// slugify('Hello World!'); // 'hello-world'
export const slugify = (str: string) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// scroll element always center
export const handleScrollXCenter = (
  ref: React.RefObject<HTMLDivElement | null>,
  classNameEleActive: string,
) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);

  if (!eleActive || !eleScroll) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position sroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX =
    xEleActive - xEleScroll + widthEleActive / 2 + positionScroll - widthEleScroll / 2;

  eleScroll.scroll({
    left: scrollX,
    behavior: "smooth",
  });
};

export default undefined;
