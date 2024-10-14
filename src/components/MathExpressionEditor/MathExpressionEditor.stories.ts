import { Meta, StoryObj } from "@storybook/react";
import MathExpressionEditor from ".";

const meta: Meta<typeof MathExpressionEditor> = {
  component: MathExpressionEditor,
  args: {
    showAnswer: true,
  },
};

export default meta;

type Story = StoryObj<typeof MathExpressionEditor>;

export const Default: Story = {};
