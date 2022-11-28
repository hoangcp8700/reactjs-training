import React from "react";

import ICON_LISTS from "./constants";

export type IconSize =
  | "10"
  | "14"
  | "16"
  | "18"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "64"
  | "72"
  | "80";

interface IconProps {
  iconName: IconName;
  size?: IconSize;
  className?: string;
}

export type IconName = keyof typeof ICON_LISTS;

const Icon: React.FC<IconProps> = ({ iconName, size = "24", className }) => {
  const Component = ICON_LISTS[iconName] as React.ElementType<React.ComponentPropsWithRef<"svg">>;
  return (
    <span>
      <Component className={className} style={{ fontSize: size, width: size, height: size }} />
    </span>
  );
};
export default Icon;

// Storybook
// argTypes: {
//     size: {
//       control: {
//         type: 'select',
//         options: ['10', '14', '16', '20', '24', '32'],
//       },
//       defaultValue: '24',
//     },
