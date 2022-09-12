import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, HeaderProps } from "./index";

export default {
  title: "components/molecules/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Headers = Template.bind({});
Headers.args = {
  children: "Dashboard Question List",
};

