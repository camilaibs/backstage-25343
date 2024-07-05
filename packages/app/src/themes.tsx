import React from 'react';
import {
  createUnifiedTheme,
  UnifiedThemeProvider,
  palettes,
} from '@backstage/theme';
import DarkIcon from '@material-ui/icons/Brightness2';
import LightIcon from '@material-ui/icons/WbSunny';
import { AppTheme } from '@backstage/core-plugin-api';
import SpeziaCompleteVariableUpright from './assets/SpeziaCompleteVariableUprightWeb.woff2';

// See https://backstage.io/docs/getting-started/app-custom-theme/#custom-fonts
const myCustomFont = {
  fontFamily: 'My-Custom-Font',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: ' 1 1000',
  fontStretch: '50% 200%',
  src: `
      local('My-Custom-Font'),
      url(${SpeziaCompleteVariableUpright}) format('woff2'),
    `,
};
export const myCustomThemeLight = createUnifiedTheme({
  fontFamily: 'My-Custom-Font',
  palette: palettes.light,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': myCustomFont,
      },
    },
  },
});
export const myCustomThemeDark = createUnifiedTheme({
  fontFamily: 'My-Custom-Font',
  palette: palettes.dark,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': myCustomFont,
      },
    },
  },
});

export const themes: AppTheme[] = [
  {
    id: 'light',
    title: 'Light Theme',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={myCustomThemeLight} children={children} />
    ),
  },
  {
    id: 'dark',
    title: 'Dark Theme',
    variant: 'dark',
    icon: <DarkIcon />,
    Provider: ({ children }) => (
      <UnifiedThemeProvider theme={myCustomThemeDark} children={children} />
    ),
  },
];
