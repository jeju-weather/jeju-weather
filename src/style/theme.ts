import { DefaultTheme } from 'styled-components';

const device = {
  mobile: `screen and (max-width: 512px)`,
  tablet: `screen and (max-width: 1024px)`,
  laptop: `screen and (max-width: 1440px)`,
};

export const light: DefaultTheme = {
  background: {
    basic: '#fff',
    point: '#FDA769',
    nav: '#FAF8F1',
    banner: '#91D8E4',
  },
  text: {
    basic: '#182747',
    point: 'orange',
  },
  device,
};

export const dark: DefaultTheme = {
  background: {
    basic: '#222831',
    point: '#095062',
    nav: '#282A3A',
    banner: '#474E68',
  },
  text: {
    basic: '#fff',
    point: 'orange',
  },
  device,
};
