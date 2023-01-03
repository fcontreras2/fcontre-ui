// .storybook/manager.js

import { addons } from '@storybook/addons';
import yourTheme from './custom-theme';

addons.setConfig({
  theme: yourTheme,
});