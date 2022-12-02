import React, { useMemo, useState } from "react";
import ProductDetail from "components/templates/ProductDetail";
import { productInfoListData } from "assets/dataDummy/products";
import { colorData } from "assets/dataDummy/categories";
import { useParams } from "react-router-dom";
import { getIdBySlug } from "utils/functions";
import RedirectError from "routes/RedirectError";
import { useQuery } from "@tanstack/react-query";
import ProductAPI from "api/product";
import { convertDollarToVN } from "utils/format";
import Container from "components/common/Container";
import Loading from "components/atoms/Loading";

const ProductDetailContainer: React.FC = () => {
  const params = useParams();

  const productID = useMemo(() => (params.slug ? getIdBySlug(params.slug, "i") : ""), [params]);

  const [color, setColor] = useState<ColorType>();
  const [size, setSize] = useState<number>(-1);

  const { data: productDetailResponse, isLoading } = useQuery(
    ["getProductDetail"],
    () => ProductAPI.GET_DETAIL(productID),
    {
      enabled: !!productID,
    },
  );

  const productDetailData = useMemo(() => {
    if (productDetailResponse) {
      return {
        title: productDetailResponse.title,
        subTitle: productDetailResponse.brand,
        priceSale: convertDollarToVN(productDetailResponse.price),
        price: convertDollarToVN(
          productDetailResponse.price + productDetailResponse.discountPercentage,
        ),
        stock: productDetailResponse.stock,
        thumbnail: productDetailResponse.images.map((ele, idx) => ({
          src: ele,
          alt: `${productDetailResponse.title}-${idx.toString()}`,
        }))[0],
        description: productDetailResponse.description,
        reviews: [
          {
            count: 222,
            title: "Đã bán",
            prefix: undefined,
            active: false,
          },
          {
            count: productDetailResponse.rating,
            title: "Đánh giá",
            prefix: "sao",
            active: false,
          },
        ],
      };
    }
    return undefined;
  }, [productDetailResponse]);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (!productID || !productDetailData) {
    return <RedirectError />;
  }

  return (
    <>
      <ProductDetail.Main
        {...productDetailData}
        colorsProps={{
          list: colorData,
          active: color,
          handleChange: (ele) => setColor(ele),
        }}
        sizesProps={{
          list: ["XS", "S", "M", "L", "XL", "XXL"],
          active: size,
          handleChange: (idx) => setSize(idx),
        }}
      />

      <Container className='mt-10'>
        <div className='md:max-w-[500px]'>
          {productInfoListData.map((ele, idx) => (
            <ProductDetail.Description
              {...ele}
              key={`product-detail-description-${idx.toString()}`}
            />
          ))}
          {productDetailData && (
            <ProductDetail.Description
              title='Mô tả sản phẩm'
              description={productDetailData.description}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default ProductDetailContainer;
