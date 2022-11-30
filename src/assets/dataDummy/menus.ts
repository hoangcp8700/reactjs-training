import { MenuHeaderType } from "services/menus/types";
import { IMAGE_DUMMY } from "utils/constants";

export const menuHeaderData: MenuHeaderType[] = [
  {
    id: "3",
    title: "Bộ sưu tập",
    link: "bo-suu-tap",
    subMenu: [
      {
        id: "3a",
        blockType: "image",
        items: [
          {
            id: "3a1",
            title: "ảnh 3",
            subMenu: [
              { id: "3a11", imgSrc: IMAGE_DUMMY, alt: "anh 3a1" },
              { id: "3a12", imgSrc: IMAGE_DUMMY, alt: "anh 3a2" },
            ],
          },
        ],
      },
      {
        id: "3b",
        blockType: "outstanding",
        items: [
          {
            id: "3b1",
            title: "Nổi bật",
            subMenu: [
              {
                id: "3b11",
                title: "Hàng mới về",
                link: "",
              },
              {
                id: "3b12",
                title: "Quần chạy bộ",
                link: "/abc",
              },
              {
                id: "3b13",
                title: "Những mặc hàng bán chạy nhất tuần",
                link: "/abc",
              },
            ],
          },
        ],
      },
      {
        id: "3c",
        blockType: "menus-image",
        items: [
          {
            id: "3c1",
            title: "Quần",
            viewAll: {
              title: "Xem tất cả quần trong bộ sưu tập",
              link: "/abc",
            },
            thumbnail: IMAGE_DUMMY,
            subMenu: [
              {
                id: "3c11",
                title: "Quần bồ",
                link: "/abc",
              },
              {
                id: "3c12",
                title: "Quần dai",
                link: "/abc",
              },
              {
                id: "3c13",
                title: "Quần ngắn",
                link: "/abc",
              },
              {
                id: "3c11",
                title: "Quần bồ",
                link: "/abc",
              },
              {
                id: "3c12",
                title: "Quần dai",
                link: "/abc",
              },
              {
                id: "3c13",
                title: "Quần ngắn",
                link: "/abc",
              },
            ],
          },
          {
            id: "3c2",
            title: "Áo",
            viewAll: {
              title: "Xem tất cả Áo trong bộ sưu tập",
              link: "/abc",
            },
            thumbnail: undefined,
            subMenu: [
              {
                id: "3c21",
                title: "Áo bồ",
                link: "/abc",
              },
              {
                id: "3c22",
                title: "Áo dai",
                link: "/abc",
              },
              {
                id: "3c23",
                title: "Áo ngắn",
                link: "/abc",
              },
            ],
          },
          {
            id: "3c3",
            title: "Giày",
            viewAll: {
              title: "Xem tất cả giày trong bộ sưu tập",
              link: "/abc",
            },
            thumbnail: "",
            subMenu: [
              {
                id: "3c31",
                title: "Giày chạy bộ",
                link: "/abc",
              },
              {
                id: "3c32",
                title: "Giày đá bóng",
                link: "/abc",
              },
              {
                id: "3c33",
                title: "Sneaker",
                link: "/abc",
              },
            ],
          },
        ],
      },
      {
        id: "3d",
        blockType: "menus",
        items: [
          {
            id: "3d3",
            title: "Thể thao",
            viewAll: {
              title: "Xem tất cả sản phẩm thể thao trong bộ sưu tập",
              link: "/abc",
            },
            subMenu: [
              {
                id: "3d31",
                title: "Bơi",
                link: "/abc",
              },
              {
                id: "3d32",
                title: "Golf",
                link: "/abc",
              },
              {
                id: "3d33",
                title: "Bóng đá",
                link: "/abc",
              },
              {
                id: "3d34",
                title: "Chạy bộ",
                link: "/abc",
              },
              {
                id: "3c34",
                title: "Tennis",
                link: "/abc",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Nam",
    link: "nam",
    subMenu: [
      {
        id: "3b",
        blockType: "outstanding",
        items: [
          {
            id: "3b1",
            title: "Nổi bật",
            subMenu: [
              {
                id: "3b11",
                title: "Hàng mới về",
                link: "/abc",
              },
              {
                id: "3b12",
                title: "Quần chạy bộ",
                link: "/abc",
              },
              {
                id: "3b13",
                title: "Những mặc hàng bán chạy nhất tuần",
                link: "/abc",
              },
            ],
          },
        ],
      },
      {
        id: "3c",
        blockType: "menus",
        items: [
          {
            id: "3c1",
            title: "Quần",
            viewAll: {
              title: "Xem tất cả quần trong bộ sưu tập",
              link: "/abc",
            },
            subMenu: [
              {
                id: "3c11",
                title: "Quần bồ",
                link: "/abc",
              },
              {
                id: "3c12",
                title: "Quần dai",
                link: "/abc",
              },
              {
                id: "3c13",
                title: "Quần ngắn",
                link: "/abc",
              },
            ],
          },
          {
            id: "3c2",
            title: "Áo",
            viewAll: {
              title: "Xem tất cả Áo trong bộ sưu tập",
              link: "/abc",
            },
            subMenu: [
              {
                id: "3c21",
                title: "Áo bồ",
                link: "/abc",
              },
              {
                id: "3c22",
                title: "Áo dai",
                link: "/abc",
              },
              {
                id: "3c23",
                title: "Áo ngắn",
                link: "/abc",
              },
            ],
          },
          {
            id: "3c3",
            title: "Thể thao",
            viewAll: {
              title: "Xem tất cả sản phẩm thể thao trong bộ sưu tập",
              link: "/abc",
            },
            subMenu: [
              {
                id: "3c31",
                title: "Bơi",
                link: "/abc",
              },
              {
                id: "3c32",
                title: "Golf",
                link: "/abc",
              },
              {
                id: "3c33",
                title: "Bóng đá",
                link: "/abc",
              },
              {
                id: "3c34",
                title: "Chạy bộ",
                link: "/abc",
              },
              {
                id: "3c34",
                title: "Tennis",
                link: "/abc",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Nữ",
    link: "nu",
    subMenu: [
      {
        id: "3b",
        blockType: "outstanding",
        items: [
          {
            id: "3b1",
            title: "Nổi bật",
            subMenu: [
              {
                id: "3b11",
                title: "Hàng mới về",
                link: "/abc",
              },
              {
                id: "3b12",
                title: "Quần chạy bộ",
                link: "/abc",
              },
              {
                id: "3b13",
                title: "Những mặc hàng bán chạy nhất tuần",
                link: "/abc",
              },
            ],
          },
        ],
      },
      {
        id: "3c",
        blockType: "menus-image",
        items: [
          {
            id: "3c1",
            title: "Quần",
            viewAll: {
              title: "Xem tất cả quần trong bộ sưu tập",
              link: "/abc",
            },
            thumbnail: IMAGE_DUMMY,
            subMenu: [
              {
                id: "3c11",
                title: "Quần bồ",
                link: "/abc",
              },
              {
                id: "3c12",
                title: "Quần dai",
                link: "/abc",
              },
              {
                id: "3c13",
                title: "Quần ngắn",
                link: "/abc",
              },
            ],
          },
          {
            id: "3c2",
            title: "Áo",
            viewAll: {
              title: "Xem tất cả Áo trong bộ sưu tập",
              link: "/abc",
            },
            thumbnail: undefined,
            subMenu: [
              {
                id: "3c21",
                title: "Áo bồ",
                link: "/abc",
              },
              {
                id: "3c22",
                title: "Áo dai",
                link: "/abc",
              },
              {
                id: "3c23",
                title: "Áo ngắn",
                link: "/abc",
              },
            ],
          },
          {
            id: "3c3",
            title: "Thể thao",
            viewAll: {
              title: "Xem tất cả sản phẩm thể thao trong bộ sưu tập",
              link: "/abc",
            },
            thumbnail: undefined,
            subMenu: [
              {
                id: "3c31",
                title: "Bơi",
                link: "/abc",
              },
              {
                id: "3c32",
                title: "Golf",
                link: "/abc",
              },
              {
                id: "3c33",
                title: "Bóng đá",
                link: "/abc",
              },
              {
                id: "3c34",
                title: "Chạy bộ",
                link: "/abc",
              },
              {
                id: "3c34",
                title: "Tennis",
                link: "/abc",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Tin tức",
    link: "tin-tuc",
    subMenu: undefined,
  },
];

export const menuDetailData = [
  {
    title: "Quần",
    subTitle: "lorem",
    link: "/",
    description: "trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
  {
    title: "Áo",
    subTitle: "lorem",
    link: "/",
    description: "trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
  {
    title: "Trẻ em",
    subTitle: "lorem",
    link: "/",
    description: "trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
  {
    title: "Bộ sưu tập",
    subTitle: "lorem",
    link: "/",
    description: "trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
  {
    title: "Khuyến mãi",
    subTitle: "lorem",
    link: "/",
    description: "trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
  {
    title: "Túi xách",
    subTitle: "lorem",
    link: "/",
    description:
      "trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season v  trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
  {
    title: "Sneaker",
    subTitle: "lorem",
    link: "/",
    description: "trending and clussi for new season",
    imgList: [IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY, IMAGE_DUMMY],
  },
];

export default undefined;
