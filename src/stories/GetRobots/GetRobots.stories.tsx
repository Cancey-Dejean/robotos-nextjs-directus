import type { Meta, StoryObj } from "@storybook/react";
import GetRobots from "./StoryGetRobots";

const meta = {
  title: "Components/GetRobots",
  component: GetRobots,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof GetRobots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "Headline",
    bgImg: "/images/get-robots-bg.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore asperiores cum, doloremque magnam voluptate reiciendis recusandae officia blanditiis rem.",
    topImage: "https://dummyimage.com/190x190.png/dddddd/ffffff",
    btnLabel: "Button",
    btnUrl: "/",
    btnVariant: "default",
    availability: true,
  },
};
