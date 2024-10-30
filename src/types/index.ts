import { ButtonProps } from "@/components/ui/Button";
import { ElementType } from "react";

export type ImageProps = {
  filename_disk?: string;
  title?: string;
};
export type HeadlineElement = ElementType<string> | undefined;

export type Buttons = {
  label: string;
  url: string;
  variant: ButtonProps["variant"];
};

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
