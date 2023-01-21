import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      basic: string;
      point: string;
      nav: string;
      banner: string;
    };
    text: {
      basic: string;
      point: string;
    };

    device: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
  }
}
