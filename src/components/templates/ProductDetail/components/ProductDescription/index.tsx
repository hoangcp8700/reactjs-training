import Text from "components/atoms/Text";
import React from "react";

interface IProps {
  label: string;
  value: string;
}
export interface DetailDescriptionProps {
  title: string;
  description?: string;
  list?: IProps[];
}

const DetailDescription: React.FC<DetailDescriptionProps> = ({ description, title, list }) => (
  <div className='not-first:mt-4'>
    <div className='bg-slate-300 rounded-lg py-2 px-4'>
      <Text className='text-lg uppercase font-semibold'>{title}</Text>
    </div>
    <div className='pt-4 sm:pt-8 px-2 sm:px-4 pb-4'>
      {description && <Text content={description} />}
      {list && (
        <div>
          {list?.map((item, idx) => (
            <div className='flex not-last:mb-4' key={`productDetail_detail-item-${idx.toString()}`}>
              <div className='overflow-hidden pr-2 whitespace-nowrap text-ellipsis w-[120px] sm:w-[160px]'>
                <Text type='span' className='text-sm !text-gray-500'>
                  {item.label}
                </Text>
              </div>
              <div className='t-productDetail_detail-valueItem'>
                <Text type='span' className='text-sm'>
                  {item.value}
                </Text>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default DetailDescription;
