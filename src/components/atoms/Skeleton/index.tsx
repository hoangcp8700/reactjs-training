import clsx from "clsx";
import React from "react";

interface SkeletonProps {
  variant?: "default" | "circle" | "square";
  ratio?: [number, number]; // NOTE: [width, height]
  width?: string;
  height?: string;
  radius?: string;
  spacing?: string;
  className?: string;
}
interface SkeletonGroupProps {
  children: React.ReactNode;
  isHorizontal?: boolean;
  spacing?: string;
  padding?: string;
  className?: string;
}

export const SkeletonGroup: React.FC<SkeletonGroupProps> = ({
  children,
  spacing,
  padding,
  isHorizontal,
  className,
}) => (
  <div
    className={clsx("skeleton-group", isHorizontal && "flex", className)}
    style={{
      ...(spacing && { margin: spacing }),
      ...(padding && { padding }),
    }}
  >
    {children}
  </div>
);

const Skeleton: React.FC<SkeletonProps> = ({
  variant,
  width,
  height,
  ratio,
  radius,
  spacing,
  className,
}) => (
  <div
    className={clsx(
      "skeleton bg-gray-200 rounded-md block overflow-hidden relative duration-300 ease-in-out before:content-[''] before:absolute before:inset-y-0 before:inset-x-[-150%] before:bg-skeleton before:animate-skeleton",
      variant === "circle" && "rounded-full",
      variant === "square" && "rounded-0",
      className,
    )}
    style={{
      ...(!ratio && {
        width,
        height,
      }),
      ...(ratio && {
        width: "100%",
        paddingBottom: `${(ratio[1] / ratio[0]) * 100}%`,
      }),
      ...{
        ...(spacing && { margin: spacing }),
        ...(radius && { borderRadius: radius }),
      },
    }}
  />
);

Skeleton.defaultProps = {
  variant: undefined,
  width: "100%",
  height: "auto",
  ratio: undefined,
  radius: undefined,
};

export default Skeleton;

// export const normal: Story = ({ variant, width, height }) => (
//   <>
//     <Skeleton variant={variant} width={width} height={height} />

//     <SkeletonGroup spacing='0 0 8px'>
//       <Skeleton ratio={[4, 3]} radius='16px' />
//     </SkeletonGroup>

//     <SkeletonGroup isHorizontal>
//       <Skeleton width='50%' height='18px' />
//       <Skeleton width='40px' height='18px' spacing='0 0 0 8px' />
//     </SkeletonGroup>

//     <SkeletonGroup spacing='8px 0' padding='0 8px 8px'>
//       <Skeleton width='80%' height='14px' />
//       <Skeleton width='100%' height='14px' spacing='4px 0 0' />
//     </SkeletonGroup>
//   </>
// );
