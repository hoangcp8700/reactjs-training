import styled from "@emotion/styled";
import STYLES from "styles";

interface ScrollbarProps {
  size?: number;
  thumbColorRGB?: string;
  trackColorRGB?: string;
  borderRadiusTrack?: number;
  borderRadiusThumb?: number;
  borderThumb?: number;
}

export const Scrollbar = styled.div<ScrollbarProps>(
  ({
    size = 6,
    thumbColorRGB = STYLES.COLORS.silverSand,
    trackColorRGB = "transparent",
    borderRadiusTrack = 100,
    borderRadiusThumb = 100,
    borderThumb = 2,
  }) => `
  // For Internet Explorer
    scrollbar-face-color:${thumbColorRGB};
    scrollbar-track-color: ${trackColorRGB};

    // For Google Chrome
    &::-webkit-scrollbar {
      height:${size}px;
      width:${size}px;
    }

    &::-webkit-scrollbar-thumb {
      background:${thumbColorRGB};
      border: ${borderThumb}px solid ${trackColorRGB};
      border-radius: ${borderRadiusThumb}px;
    }

    &::-webkit-scrollbar-track {
      background: ${trackColorRGB};
      border-radius:${borderRadiusTrack};
    }
  `,
);
