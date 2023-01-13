import { Header, ThemeSwitch } from 'components';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
`;

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <ThemeSwitch />
    </>
  );
};
