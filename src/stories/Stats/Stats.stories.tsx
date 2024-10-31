import type { Meta, StoryObj } from "@storybook/react";
import Stats from "./StoryStats";

const meta = {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    bgImg: "/images/diagrams.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore asperiores cum, doloremque magnam voluptate reiciendis recusandae officia blanditiis rem.",
    image: "/images/rarity-type.svg",
  },
};
