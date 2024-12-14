import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    isDisabled: { control: "boolean" },
    isFluid: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click Me",
  variant: "primary",
  size: "medium",
  isDisabled: false,
  isFluid: false,
};

export const Small = Template.bind({});
Small.args = {
  children: "Click Me",
  variant: "primary",
  size: "small",
  isDisabled: false,
  isFluid: false,
};

export const Large = Template.bind({});
Large.args = {
  children: "Click Me",
  variant: "primary",
  size: "large",
  isDisabled: false,
  isFluid: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  variant: "primary",
  size: "medium",
  isDisabled: true,
  isFluid: false,
};

export const Fluid = Template.bind({});
Fluid.args = {
  children: "Full Width",
  variant: "primary",
  size: "medium",
  isDisabled: false,
  isFluid: true,
};
