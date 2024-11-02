import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      description: "The size of the button",
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      description:
        "If true, the button will render the child as a linkable button",
      control: false,
    },
  },
  args: {
    children: "Button",
    disabled: false,
    asChild: false,
    size: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Mint: Story = {
  args: {
    variant: "mint",
  },
};

export const Purple: Story = {
  args: {
    variant: "purple",
  },
};
