export interface MenuHeaderType {
  id: string;
  title: string;
  link: string;
  subMenu?: BlockSubMenu[];
}

export interface BlockSubMenu {
  id: string;
  blockType: "image" | "outstanding" | "menus-image" | "menus";
  items: SubMenuType[];
}

export interface SubMenuType {
  id: string;
  title: string;
  subMenu?: SubMenu2Type[];
  viewAll?: ViewAllType;
  thumbnail?: string;
}

export interface SubMenu2Type {
  id: string;
  title?: string;
  link?: string;
  // TODO: blockType == image
  imgSrc?: string;
  alt?: string;
}

export interface ViewAllType {
  title: string;
  link: string;
}
