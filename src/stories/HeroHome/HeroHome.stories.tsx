import type { Meta, StoryObj } from "@storybook/react";
import HeroHome from "./StoryHeroHome";

const meta = {
  title: "Components/Heroes/HeroHome",
  component: HeroHome,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeroHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Heading",
    availability: true,
    buttons: [
      {
        label: "Button",
        url: "/",
        variant: "default",
      },
    ],
  },
};
