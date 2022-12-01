import { useInfiniteQuery } from "@tanstack/react-query";
import { CardProductProps } from "components/molecules/Card/components/Product";
import HomeSuggest from "components/templates/HomeSuggest";
import React, { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductAPI from "api/product";
import { CONSTANT_ROUTE } from "routes/constants";
import { convertDollarToVN } from "utils/format";
import { slugify } from "utils/functions";

const tabsDummy = [
  {
    value: "all",
    url: "all",
    label: "Tất cả",
  },
  {
    value: "suggest-for-you",
    url: "suggest-for-you",
    label: "Gơi ý cho bạn",
  },
  {
    value: "suggest-for-today",
    url: "suggest-for-today",
    label: "Gơi ý hôm nay",
  },
  {
    value: "sale-30",
    url: "sale-30",
    label: "Sale 30%",
  },
  {
    value: "free-ship",
    url: "free-ship",
    label: "Freeship",
  },
];

const language = "VI";
const LIMIT = 20;

const HomeSuggestContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const slugCategory = useMemo(
    () => searchParams.get(CONSTANT_ROUTE[language].CATEGORY),
    [searchParams],
  );

  const {
    data: productResponse,
    isFetchingNextPage: productLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["getProjectsHome"],
    ({ pageParam = 0 }) =>
      ProductAPI.GET_LIST({
        skip: pageParam,
        limit: LIMIT,
      }),
    {
      getNextPageParam: (params) =>
        params?.products.length >= params.total ? false : Number(params.skip) + LIMIT,
    },
  );
  const productData = useMemo(
    (): CardProductProps[] =>
      (productResponse?.pages || []).reduce(
        (prev: CardProductProps[], curr) => [
          ...prev,
          ...curr.products.map((ele) => ({
            thumbnail: {
              src: ele.thumbnail,
              alt: ele.title,
            },
            originPrice: convertDollarToVN(ele.price + ele.discountPercentage),
            price: convertDollarToVN(ele.price),
            id: ele.id,
            category: {
              value: "sale-30",
              label: "Sale 30%",
            },
            title: {
              text: ele.title,
              target: "_self",
              href: `/${CONSTANT_ROUTE[language].PRODUCT_DETAIL}/${slugify(ele.title)}.i-${ele.id}`,
            },
            sales: [
              { label: "Giảm 30%" },
              { label: "Free ship", style: { background: "#fafa", color: "#fff" } },
            ],
          })),
        ],
        [],
      ),
    [productResponse],
  );

  const tabActive = useMemo(() => {
    if (tabsDummy && slugCategory) {
      return tabsDummy.findIndex((ele) => ele.url === slugCategory);
    }
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugCategory, tabsDummy]);

  const handleChangeTab = useCallback(
    (tab: number) => {
      setSearchParams(`${CONSTANT_ROUTE[language].CATEGORY}=${tabsDummy[tab].url}`);
    },
    [setSearchParams],
  );

  return (
    <HomeSuggest
      products={productData}
      noData='Không có sản phẩm nào'
      tabs={tabsDummy}
      active={tabActive}
      loading={true || productLoading}
      onClick={handleChangeTab}
      onMore={() => hasNextPage && fetchNextPage()}
    />
  );
};

export default HomeSuggestContainer;
