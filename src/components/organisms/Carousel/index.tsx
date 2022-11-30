import React, { useRef } from "react";
import ReactSlick, { Settings } from "react-slick";
import clsx from "clsx";

import handleScrollCenter from "./function";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export interface CarouselProps {
  settings?: Settings;
  asNavFor?: ReactSlick;
  ref?: React.RefObject<ReactSlick>;
  children: React.ReactNode;
  centerMode?: boolean;
}

// NOTE: chua custom slide
const Carousel = React.forwardRef<ReactSlick, CarouselProps>(
  ({ settings, children, asNavFor }, ref) => {
    const refCarousel = useRef<HTMLDivElement>(null);
    return (
      <div ref={refCarousel} className={clsx("o-carousel", "relative")}>
        <ReactSlick
          centerPadding='0'
          {...settings}
          {...(asNavFor && { asNavFor })}
          ref={ref}
          afterChange={(currentSlide) => {
            if (settings?.afterChange) {
              settings?.afterChange(currentSlide);
            }
            handleScrollCenter(refCarousel);
          }}
        >
          {React.Children.map(children, (item) => (
            <div className='o-carousel_wrap'>
              <div className='o-carousel_item'>{item}</div>
            </div>
          ))}
        </ReactSlick>
      </div>
    );
  },
);

Carousel.defaultProps = {
  settings: {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "ease-in-out",
    infinite: false,
    // prevArrow: <CustomArrow type='prev' />,
    // nextArrow: <CustomArrow type='next' />,
    // customPaging() {
    //   return <CustomDot modifiers={["circleBlack"]} />;
    // },
  },
};

export default Carousel;
