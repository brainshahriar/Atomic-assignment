import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./";

export default {
  title: "components/atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: "button",
  children: "Large",
  isPadding: false,
};

export const Hover = Template.bind({});
Hover.args = {
  type: "button",
  buttonType: "hover",
  children: "Hover",
  isPadding: false,
};

export const Focus = Template.bind({});
Focus.args = {
  type: "button",
  buttonType: "focus",
  isPadding: false,
  children: "Focus",
};
export const Disabled = Template.bind({});
Disabled.args = {
  type:"button",
  disabled:true,
  isPadding: false,
  children: "Disabled",
};

export const SaveAndContinue = Template.bind({});
SaveAndContinue.args = {
  type: "button",
  isPadding: false,
  children: "Save and Continue",
  buttonType: "save",
};

export const Reset = Template.bind({});
Reset.args = {
  type: "button",
  isPadding: false,
  children: "Reset",
  buttonType: "reset",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "button",
  isPadding: false,
  children: "Medium",
  size: "medium",
};

export const MediumHover = Template.bind({});
MediumHover.args = {
  type: "button",
  isPadding: false,
  children: "Hover",
  size: "medium",
  buttonType: "hover",
};

export const MediumFocus = Template.bind({});
MediumFocus.args = {
  type: "button",
  isPadding: false,
  children: "Focus",
  size: "medium",
  buttonType: "focus",
};

export const MediumDisable = Template.bind({});
MediumDisable.args = {
  type: "button",
  disabled: true,
  isPadding: false,
  children: "Disable",
  size: "medium",
};

export const SaveAndContinueMedium = Template.bind({});
SaveAndContinueMedium.args = {
  type: "button",
  isPadding: false,
  children: "Save and Continue",
  buttonType: "save",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  type: "button",
  isPadding: false,
  children: "Small",
  size: "small",
};

export const SmallHover = Template.bind({});
SmallHover.args = {
  type: "button",
  isPadding: false,
  children: "Hover",
  size: "small",
  buttonType: "hover",
};

export const SmallFocus = Template.bind({});
SmallFocus.args = {
  type: "button",
  isPadding: false,
  children: "Focus",
  size: "small",
  buttonType: "focus",
};

export const SmallDisable = Template.bind({});
SmallDisable.args = {
  type: "button",
  disabled: true,
  isPadding: false,
  children: "Disable",
  size: "small",
};

export const SaveAndContinueSmall = Template.bind({});
SaveAndContinueSmall.args = {
  type: "button",
  isPadding: false,
  children: "Save and Continue",
  buttonType: "save",
  size:"small"
};

export const View = Template.bind({});
View.args = {
  type: "button",
  isPadding: false,
  children: "View",
  buttonType: "view",
  size: "small",
};
export const Edit = Template.bind({});
Edit.args = {
  type: "button",
  isPadding: false,
  children: "Edit",
  buttonType: "edit",
  size: "small",
};
export const Delete = Template.bind({});
Delete.args = {
  type: "button",
  isPadding: false,
  children: "Delete",
  buttonType: "delete",
  size: "small",
};

