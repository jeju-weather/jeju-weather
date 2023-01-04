import { ThemeProvider } from 'styled-components';
import { dark, light } from './style/theme';
import { GlobalStyle } from './style/global.style';
import { useAppSelector } from 'hooks/useStore';
import Router from 'Router';

const App = () => {
  const isDark = useAppSelector(({ theme }) => theme);
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
