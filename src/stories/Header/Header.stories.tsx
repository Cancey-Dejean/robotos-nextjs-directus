import type { Meta, StoryObj } from "@storybook/react";
import HeaderContent from "./StoryHeader";

const meta = {
  title: "Components/Header",
  component: HeaderContent,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeaderContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const menu = [
  {
    label: "Home",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Your Stuff",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Rarity",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Blog",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Faq",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Connect",
    url: "/",
    cta: true,
    newTab: false,
  },
];

export const Default: Story = {
  args: {
    logo: "/images/logo-icon.png",
    menu: menu,
  },
};
