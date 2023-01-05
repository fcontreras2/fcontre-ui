import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormText from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/FormText',
  component: FormText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
 
} as ComponentMeta<typeof FormText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormText> = (args) => <FormText {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  placeholder: 'Placeholder form-text',
};

export const CustomClass = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomClass.args = {
  placeholder: 'Placeholder form-text',
  className: 'bg-secondary-700 text-white',
  containerClassName: 'w-1/2'
};

