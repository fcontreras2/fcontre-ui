import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { variantButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: variantButton,
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  children: 'Button',
  variant: 'secondary'
};

export const PrimaryGradient = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryGradient.args = {
  children: 'Button',
  variant: 'primary-gradient'
};

export const SecondaryGradient = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryGradient.args = {
  children: 'Button',
  variant: 'secondary-gradient'
};

export const CustomClass = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomClass.args = {
  children: 'Button',
  variant: 'primary',
  className: 'bg-[#000] rounded-none text-white'
};

