import { ButtonProps } from "@/components/ui/Button";
import { ElementType } from "react";

export type ImageProps = {
  filename_disk?: string;
  title?: string;
  height?: number;
  width?: number;
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

export type SeoProps = {
  title: string;
  meta_description: string;
  canonical_url: string;
  no_index: boolean;
  no_follow: boolean;
  sitemap_change_frequency: string;
  sitemap_priority: string;
  og_image: ImageProps;
};

export type PostProps = {
  title: string;
  slug: string;
  date_created: string;
  date_updated: string;
  content: string;
  featuredImg: ImageProps;
  seo: SeoProps;
};
