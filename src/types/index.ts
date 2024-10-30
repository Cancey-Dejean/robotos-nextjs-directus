export type NavItem = {
  url?: string | null;
  className?: string;
  newTab?: boolean;
  label: string;
  cta?: boolean;
  handleMobileMenu?: () => void;
};

export type NavItemProps = {
  menuList: NavItem[];
};
