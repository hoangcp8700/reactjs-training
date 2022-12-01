import React from "react";

interface ChildrenProp {
  children: React.ReactNode;
}
export const PropertyHeading: React.FC<ChildrenProp> = ({ children }) => (
  <div className='mb-2 flex items-center'>{children}</div>
);

export const PropertyLabel: React.FC<ChildrenProp> = ({ children }) => (
  <div
    className={`ml-6 relative before:bg-gray-900 before:rounded-lg before:content-[''] before:absolute before:top-1/2 before:translate-y-[-50%]before:w-[10px] before:h-1/2 before:left-[-16px]`}
  >
    {children}
  </div>
);

export const PropertyList: React.FC<ChildrenProp> = ({ children }) => (
  <div className='flex flex-wrap mb-[-4px]'>{children}</div>
);
