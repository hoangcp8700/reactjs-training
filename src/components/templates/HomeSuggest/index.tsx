import clsx from "clsx";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import Card from "components/molecules/Card";
import {
  CardProductProps,
  SkeletonCardProduct,
} from "components/molecules/Card/components/Product";
import Tabs, { Tab, TabPanel } from "components/organisms/Tabs";
import useScrollInfinite from "hooks/useScrollInfinite";
import React from "react";
import LazyLoad from "react-lazy-load";

interface HomeSuggestProps {
  tabs: OptionType[];
  active?: number;
  products?: CardProductProps[];
  noData: string;
  loading?: boolean;
  onClick?: (index: number) => void;
  onMore?: () => void;
}

const HomeSuggest: React.FC<HomeSuggestProps> = ({
  tabs,
  active,
  products,
  noData,
  loading,
  onClick,
  onMore,
}) => {
  const { setNode } = useScrollInfinite(onMore);

  return (
    <div className='t-homeSuggest'>
      <Container>
        <>
          <Tabs className='tab' indexActive={active || 0} classTabsActive='home-suggest-active'>
            {tabs.map((item, idx) => (
              <Tab
                classTabsActive='home-suggest-active'
                key={`homeSuggest-tab-item-${idx.toString()}`}
                active={active === idx}
                onClick={() => onClick && onClick(idx)}
              >
                <Text
                  className={clsx(
                    active === idx && "!text-blue-700",
                    "text-sm sm:text-lg uppercase hover:text-blue-700",
                  )}
                >
                  {item.label}
                </Text>
              </Tab>
            ))}
          </Tabs>

          <TabPanel className='mt-3'>
            {products && products.length ? (
              <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {products.map((item, idx) => (
                  <LazyLoad
                    height={300}
                    offset={100}
                    key={`homeSuggest-product-item-${idx.toString()}`}
                  >
                    <div className='flex h-full'>
                      <Card.Product {...item} />
                    </div>
                  </LazyLoad>
                ))}
                {loading &&
                  new Array(6).fill(true).map((_, idx) => (
                    <div key={`homeSuggest-skeleton-product-item-${idx.toString()}`}>
                      <SkeletonCardProduct />
                    </div>
                  ))}
              </div>
            ) : (
              <div>
                <Text>{noData}</Text>
              </div>
            )}
            {onMore && <div className='load-more' ref={(suggest) => setNode(suggest)} />}
          </TabPanel>
        </>
      </Container>
    </div>
  );
};
export default HomeSuggest;
