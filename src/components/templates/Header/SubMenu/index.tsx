import clsx from "clsx";
import Image from "components/atoms/Image";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import Accordion, { AccordionWrapper } from "components/organisms/Accordion";
import Carousel from "components/organisms/Carousel";
import Modal from "components/organisms/Modal";
import React, { useMemo } from "react";
import { LazyLoadTypes } from "react-slick";
import {
  BlockSubMenu,
  MenuHeaderType,
  SubMenu2Type,
  SubMenuType,
  ViewAllType,
} from "api/menus/types";
// import STYLES from "styles";

import NavSearch from "../NavSearch";

interface SubMenuProps {
  subMenu?: BlockSubMenu[];
}
interface SubMenuTabletProps {
  menus: MenuHeaderType[];
  open: boolean;
  onClose: () => void;
}
interface MenuBlockProps {
  id: string;
  title: string;
  thumbnail?: string;
  list: SubMenu2Type[];
  viewAll?: ViewAllType;
  className?: string;
}

const MenuBlock: React.FC<MenuBlockProps> = ({
  id,
  thumbnail,
  title,
  list,
  viewAll,
  className,
}) => (
  <div className={clsx("flex-1 flex-col justify-between", className)}>
    <div className='o-subMenu_blockItem-body'>
      <div className='o-subMenu_blockItem-title'>
        <Link href={viewAll?.link}>
          <Text className='text-gray-900 font-medium'>{title}</Text>
        </Link>
      </div>
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          ratio={[16, 9]}
          className='rounded-lg mb-2 overflow-hidden'
        />
      )}
      <ul>
        {list.map((ele, idx) => (
          <li
            key={`menu-block-item-${id}-${idx.toString()}`}
            className='o-subMenu_blockItem-item group'
          >
            <Link href={ele.link} className='text-sm group-hover:text-blue-700'>
              {ele.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    {viewAll && (
      <div className='h-[36px] overflow-hidden'>
        <Link href={viewAll?.link}>
          <Text className='text-sm font-medium'>{viewAll.title}</Text>
        </Link>
      </div>
    )}
  </div>
);

export const SubMenuTablet: React.FC<SubMenuTabletProps> = ({ menus, open, onClose }) => {
  const renderSubMenu = useMemo(() => {
    if (menus && menus?.length > 0) {
      return menus.map((menu) => {
        // check subMenu have length
        if (menu?.subMenu && menu?.subMenu.length > 0) {
          const newSub = menu.subMenu.reduce(
            (arr: SubMenuType[], current) =>
              !["image", "outstanding"].includes(current.blockType)
                ? [...arr, ...current.items]
                : arr,
            [],
          );
          return {
            title: menu.title,
            link: menu.link,
            subMenu: newSub,
          };
        }

        return { title: menu.title, link: menu.link, subMenu: [] };
      });
    }
    return [];
  }, [menus]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={{
        content: "max-w-[320px] h-[100vh]",
        body: "py-6",
      }}
      headerProps={{
        node: <NavSearch />,
        className: "py-2",
      }}
    >
      <AccordionWrapper>
        {renderSubMenu.map((ele, idx) => (
          <Accordion
            key={`subMenu-parent-${idx.toString()}`}
            headingNode={
              <Link href={ele.link} className='text-sm'>
                {ele.title}
              </Link>
            }
            classProps={{
              wrapper: "not-last:mb-2",
            }}
          >
            {ele.subMenu &&
              ele.subMenu.length > 0 &&
              ele.subMenu.map((ele2, idx2) => (
                <Accordion
                  key={`subMenu-child-1-${idx2.toString()}`}
                  headingNode={
                    <Link href={ele2?.viewAll?.link} className='text-sm'>
                      {ele2.title}
                    </Link>
                  }
                  classProps={{
                    wrapper: "not-last:mb-1",
                  }}
                >
                  {ele2.subMenu &&
                    ele2.subMenu.length > 0 &&
                    ele2.subMenu.map((ele3, idx3) => (
                      <Accordion
                        key={`subMenu-child-2-${idx3.toString()}`}
                        headingNode={
                          <Link href={ele3?.link} className='text-sm'>
                            {ele3.title}
                          </Link>
                        }
                        classProps={{
                          wrapper: "not-last:mb-1",
                        }}
                      />
                    ))}
                </Accordion>
              ))}
          </Accordion>
        ))}
      </AccordionWrapper>
    </Modal>
  );
};

export const SubMenuDesktop: React.FC<SubMenuProps> = ({ subMenu }) => {
  const settings = useMemo(
    () => ({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplayTimeout: 3000,
      cssEase: "ease-in-out",
      dotsClass: "slick-dots absolute top-0 h-fit",
      lazyLoad: "ondemand" as LazyLoadTypes,
    }),
    [],
  );

  const renderUI = useMemo(() => {
    if (subMenu && subMenu?.length > 0) {
      return subMenu.map((ele) => {
        switch (ele.blockType) {
          case "image":
            return (
              <div className='not-last:mr-4 bg-gray-400 h-fit w-full max-w-[220px] rounded-lg  overflow-hidden'>
                {ele.items && ele.items[0].subMenu && (
                  <Carousel settings={settings}>
                    {ele.items[0].subMenu.map((item, idx) => (
                      <div key={`submenu-block-image-${idx.toString()}`}>
                        <Image src={item?.imgSrc || ""} alt={item.alt || ""} ratio={[3, 4]} />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            );
          case "outstanding":
            return (
              ele.items[0].subMenu && (
                <div className='mr-8'>
                  <MenuBlock
                    id='outstanding'
                    title={ele.items[0].title}
                    list={ele.items[0].subMenu}
                  />
                </div>
              )
            );
          case "menus-image":
            return (
              <div className='not-last:mr-4'>
                {ele.items.map((item, idx) => (
                  <MenuBlock
                    key={`submenu-block-menuImage-${idx.toString()}`}
                    id='menusImage'
                    title={item.title}
                    list={item.subMenu || []}
                    viewAll={item.viewAll}
                    thumbnail={item.thumbnail}
                  />
                ))}
              </div>
            );
          case "menus":
            return (
              <div className='not-last:mr-4 flex'>
                {ele.items.map((item, idx) => (
                  <MenuBlock
                    key={`submenu-block-menu-${idx.toString()}`}
                    id='menus'
                    title={item.title}
                    list={item.subMenu || []}
                    viewAll={item.viewAll}
                    className='not-last:mr-4'
                  />
                ))}
              </div>
            );
          default:
            return undefined;
        }
      });
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subMenu]);

  return (
    <div className='o-subMenu absolute top-[38px] left-0 w-full'>
      <Container>
        <div className='o-subMenu_wrapper'>
          {/* // body */}
          <div className='bg-white rounded-b-lg flex p-4'>{renderUI}</div>
        </div>
      </Container>
    </div>
  );
};

export default undefined;
