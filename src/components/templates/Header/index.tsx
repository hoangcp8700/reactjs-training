import Image from "components/atoms/Image";
import Link from "components/atoms/Link";
import Text from "components/atoms/Text";
import Container from "components/common/Container";
import useDeviceQueries from "hooks/useDeviceQueries";
import useWindowEvents from "hooks/useWindowEvents";
import React, { useRef, useState } from "react";
import { MenuHeaderType } from "services/menus/types";
import { CONSTANT_ROUTE } from "routes/constants";
import { baseSlug } from "utils/functions";
import IconButton from "components/atoms/IconButton";
import clsx from "clsx";

import NavSearch from "./NavSearch";
import { SubMenuDesktop, SubMenuTablet } from "./SubMenu";
import { HeaderBody } from "./style";

interface HeaderProps {
  menus: MenuHeaderType[];
  logo: {
    imgSrc: string;
    alt: string;
    link: string;
  };
}
interface HeaderContainerProps extends HeaderProps {}

const HeaderDesktop: React.FC<HeaderProps> = ({ logo, menus }) => {
  const [idxHover, setIdxHover] = useState(-1);

  return (
    <HeaderBody onMouseLeave={() => setIdxHover(-1)}>
      <Container>
        <div className='flex justify-between items-center relative'>
          <div className='min-h-[32px] relative min-w-[90px]'>
            <div className='absolute bottom-0 left-0 h-[60px] w-[60px]'>
              <Link href={logo.link}>
                <Image src={logo.imgSrc} alt={logo.alt} />
              </Link>
            </div>
          </div>
          <div className='flex-1 relative'>
            <ul className='flex items-center'>
              {menus.map((ele, idx) => (
                <li
                  className={clsx(
                    "not-last:mr-6 relative py-2 before:content-[] before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[2px]before:transition before:duration-300 before:ease-in-out before:bg-gray-700",
                    idxHover === idx &&
                      "before:left-0 before:w-full hover:before:left-0 hover:before:w-full",
                  )}
                  key={`header-menu-item-${idx.toString()}`}
                  onMouseEnter={() => setIdxHover(idx)}
                >
                  <Link href={ele.link}>
                    <Text className='text-sm font-medium text-gray-700 uppercase'>{ele.title}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='adjust-flex-center'>
            <IconButton
              size={16}
              iconName='user'
              linkProps={{ href: baseSlug(CONSTANT_ROUTE.VI.LOGIN) }}
              className='mr-1 lg:mr-6'
            />
            <IconButton size={16} iconName='heartFill' className='mr-3 lg:mr-6' />
            <IconButton size={16} iconName='cartShopping' />
          </div>
        </div>
      </Container>

      {idxHover !== -1 && menus[idxHover]?.subMenu && (
        <SubMenuDesktop subMenu={menus[idxHover]?.subMenu} />
      )}
      {/* <SubMenuDesktop subMenu={menus[0]?.subMenu} /> */}
    </HeaderBody>
  );
};

const HeaderTablet: React.FC<HeaderProps> = ({ logo, menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderBody className='!bg-gray-200'>
        <Container>
          <div className='flex justify-between items-center relative o-header_wrapper-tablet'>
            <div className='o-header_sideLeft'>
              <IconButton
                iconName='hamburger'
                size={40}
                buttonProps={{
                  onClick: () => setIsOpen(!isOpen),
                  className: "shadow-none",
                }}
              />
            </div>
            <div className='min-h-[60px] pr-10 w-full adjust-flex-center'>
              <div className='absolute bottom-[-10px] h-[50px] w-[50px]'>
                <Link href={logo.link}>
                  <Image src={logo.imgSrc} alt={logo.alt} />
                </Link>
              </div>
            </div>
            <div className='absolute right-0 adjust-flex-center'>
              <IconButton
                buttonProps={{ className: "shadow-none" }}
                iconName='user'
                size={16}
                className='mr-3 lg:mr-6'
              />
              <IconButton
                buttonProps={{ className: "shadow-none" }}
                iconName='heartFill'
                size={16}
                className='mr-3 lg:mr-6'
              />
              <IconButton
                buttonProps={{ className: "shadow-none" }}
                iconName='cartShopping'
                size={16}
              />
            </div>
          </div>
        </Container>
      </HeaderBody>

      <SubMenuTablet menus={menus} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const Header: React.FC<HeaderContainerProps> = ({ logo, menus }) => {
  const { isDesktop } = useDeviceQueries();
  const [isScroll, setIsScroll] = useState(false);

  const refPageYOffset = useRef<number>();

  useWindowEvents(
    "scroll",
    () => {
      if (window.pageYOffset > 70 && Number(refPageYOffset.current || 0) < window.pageYOffset) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      refPageYOffset.current = window.pageYOffset;
    },
    [],
  );

  return (
    <header className={clsx("fixed top-0 w-full z-header ")}>
      <nav
        className={clsx(
          "transition-transform duration-300 ease-in-out",
          isScroll && "translate-y-[-1000px]",
        )}
      >
        {isDesktop && <NavSearch />}
        {isDesktop ? (
          <HeaderDesktop logo={logo} menus={menus} />
        ) : (
          <HeaderTablet logo={logo} menus={menus} />
        )}
      </nav>
    </header>
  );
};

export default Header;