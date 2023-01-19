import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './index';
import icons from '../../icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    }
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: 'ic_article',
};

export const CustomColor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomColor.args = {
  name: 'ic_article',
  className: 'text-white w-10 h-10',
};


