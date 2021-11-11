import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      background: string;
      text: string;
      success: string;
    };

    fonts: {
      main: string;
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
