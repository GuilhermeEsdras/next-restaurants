import { DefaultTheme } from 'styled-components';

import defaultThemeConstants from '../defaultThemeConstants';

const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    primary: '#6200ee',
    background: '#00000014',
    text: '#000000B3',
    success: '#135E01',
  },

  ...defaultThemeConstants,
};

export default dark;
