import Text from "components/atoms/Text";
import React from "react";

export interface SaleTagsProps {
  sales?: {
    label: string;
    style?: React.CSSProperties;
  }[];
}

const SaleTags: React.FC<SaleTagsProps> = ({ sales }) => (
  <div className='flex items-center justify-start flex-wrap m-[-4px]'>
    {sales?.map((ele, idx) => (
      <div key={`saleTag-${idx.toString()}`} className='p-1'>
        <div
          className='bg-gray-600 rounded py-0.5 px-2.5 whitespace-nowrap'
          style={ele.style ? { ...ele.style } : {}}
        >
          <Text type='span' className='!text-white text-xs'>
            {ele.label}
          </Text>
        </div>
      </div>
    ))}
  </div>
);

export default SaleTags;
