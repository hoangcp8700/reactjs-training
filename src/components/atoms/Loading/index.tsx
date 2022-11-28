import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

export type LoadingProps = {
  fullScreen?: boolean;
  isOverlay?: boolean;
};

const Loading: React.FC<LoadingProps> = ({ fullScreen, isOverlay }) => (
  <div
    className={clsx(
      "overflow-hidden",
      fullScreen && "fixed w-screen h-screen flex justify-items-center",
      fullScreen && isOverlay && "bg-black-300",
    )}
  >
    <div className={styles.wrapSpinner}>
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Loading;
// Storybook
//  argTypes: {
//   fullScreen: {
//     control: {
//       type: 'boolean',
//       options: [false, true],
//     },
//     defaultValue: false,
//   },
//   isOverlay: {
//     control: {
//       type: 'boolean',
//       options: [false, true],
//     },
//     defaultValue: false,
//   },
// },
