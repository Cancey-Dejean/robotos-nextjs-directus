import type { Meta, StoryObj } from "@storybook/react";
import ImageStack from "./StoryImageStack";

const meta = {
  title: "Components/ImageStack",
  component: ImageStack,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ImageStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "",
  },
};
