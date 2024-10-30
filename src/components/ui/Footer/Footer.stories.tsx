import type { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    linkOneText: "Company Name",
    linkTwoText: "Documentation",
    linkThreeText: "Examples",
  },
};
