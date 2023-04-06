import { ThemeProvider } from 'styled-components';
import { dark, light } from './style/theme';
import { GlobalStyle } from './style/global.style';
import { useAppSelector } from 'hooks/useStore';
import Router from 'Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const isDark = useAppSelector(({ theme }) => theme.value);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? dark : light}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
