import type { Meta, StoryObj } from "@storybook/react";
import AccordionGroup from ".";

const meta = {
  title: "Components/Accordion",
  component: AccordionGroup,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-10">
        <Story />
      </div>
    ),
  ],
  argTypes: {},
  args: {
    type: "single",
    collapsible: true,
  },
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        value: "item-1",
        title: "Is it accessible?",
        children: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        value: "item-2",
        title: "Is it accessible?",
        children: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        value: "item-3",
        title: "Is it accessible?",
        children: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
    ],
  },
};

export const Single: Story = {
  args: {
    type: "single",
    items: [
      {
        value: "item-1",
        title: "Is it accessible?",
        children: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
    ],
  },
};
