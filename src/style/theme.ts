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
    nav: 'linear-gradient(to top, rgba(255,255,255,0.1), #ffefba);',
    mobileNav: '#fff',
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
    nav: 'linear-gradient(to top, rgba(34, 40, 49, 0.1), #203A43)',
    mobileNav: '#203A43',
    banner: '#474E68',
  },
  text: {
    basic: '#fff',
    point: 'orange',
  },
  device,
};
