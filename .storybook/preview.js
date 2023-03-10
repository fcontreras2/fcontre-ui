import React from "react";

import "../src/main.scss";
import icons from "../src/icons";
import IconProvider from '../src/providers/icon.context';

export const decorators = [
  (Story) => (
    <IconProvider icons={icons}>
      <Story />
    </IconProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introducción', 'Components', 'Hooks'],
    },
  },
};
