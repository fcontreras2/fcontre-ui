import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormSelectMdx from './doc.mdx';
import FormSelect from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/FormSelect',
  component: FormSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
 
} as ComponentMeta<typeof FormSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormSelect> = (args) => <FormSelect {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: [{ label: 'Opción 1', value:1}, {label: 'Opción 2', value: 2}]
};
