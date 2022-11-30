import styled from "@emotion/styled";
import clsx from "clsx";
import React from "react";

export type LoadingProps = {
  fullScreen?: boolean;
  isOverlay?: boolean;
  className?: string;
};
interface SpinnerStyleProps {
  index: number;
}
const Spinner = styled("div")<SpinnerStyleProps>((props) => ({
  animationDelay: `${props.index * 100}ms`,
  backgroundColor: `rgba(21,94,117,${0.8 - props.index * 0.1})`,
}));

const Loading: React.FC<LoadingProps> = ({ className, fullScreen, isOverlay }) => (
  <div
    className={clsx(
      "overflow-hidden",
      fullScreen && "fixed w-screen h-screen flex justify-items-center",
      fullScreen && isOverlay && "bg-black-300",
    )}
  >
    <div className='w-full h-full'>
      <div
        className={clsx(
          "relative adjust-flex-center w-full h-full translate-x-[32px] py-8",
          className,
        )}
      >
        {new Array(5).fill(true).map((_ele, index) => (
          <Spinner
            index={index}
            key={`loading-box-${index.toString()}`}
            className='bg-blue-700 rounded-full w-[16px] h-[16px] animate-spinner-loading'
          />
        ))}
      </div>
    </div>
  </div>
);

export default Loading;
