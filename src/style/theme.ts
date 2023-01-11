import { DefaultTheme } from 'styled-components';

const device = {
  mobile: `screen and (max-width: 480px)`,
  tablet: `screen and (max-width: 1024px)`,
  laptop: `screen and (max-width: 1380px`,
};

export const light: DefaultTheme = {
  background: {
    basic: '#fff',
    point: '#fff',
  },
  text: {
    basic: '#222831',
    point: 'orange',
  },
  device,
};

export const dark: DefaultTheme = {
  background: {
    basic: '#222831',
    point: '#fff',
  },
  text: {
    basic: '#fff',
    point: 'orange',
  },
  device,
};
