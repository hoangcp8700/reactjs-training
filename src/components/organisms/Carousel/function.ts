const handleScrollCenter = (ref: React.RefObject<HTMLDivElement | HTMLUListElement | null>) => {
  const eleScroll = ref.current?.querySelector(".slick-dots");
  const eleActive = eleScroll && eleScroll.querySelector(".slick-active");
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

export default handleScrollCenter;
