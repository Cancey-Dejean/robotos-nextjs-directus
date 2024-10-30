import type { Meta, StoryObj } from "@storybook/react";
import HeroHome from ".";

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
    item: {
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
  },
};
