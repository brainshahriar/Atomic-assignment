import { Story, Meta } from "@storybook/react/types-6-0";
import { Text, TextProps } from "./";

export default {
  title: "components/atoms/Text",
  component: Text, 
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const SmartCbt = Template.bind({});
SmartCbt.args = {
  children: " SMART CBT",
  type: "font18",
};

export const QuestionList = Template.bind({});
QuestionList.args = {
  children: "Dashboard Question List",
  type: "font14",
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  children: "Dashboard",
  type: "font12",
};

