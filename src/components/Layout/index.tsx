import { Header, ThemeSwitch } from 'components';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const Container = styled.main`
  padding: 50px 30px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
