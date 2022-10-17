import { themes } from '@storybook/theming';
import { initialize, mswDecorator } from 'msw-storybook-addon';

const isDevelopment = window.CONFIG_TYPE === 'DEVELOPMENT';

import '../src/styles/global.css'
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: isDevelopment ? 'mockServiceWorker.js' : '/ignite-lab-ds/mockServiceWorker.js'
  }
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}