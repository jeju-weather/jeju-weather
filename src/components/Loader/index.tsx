import { Orbit } from '@uiball/loaders';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <Container>
      <Orbit size={25} speed={1.5} color="orange" />
    </Container>
  );
};
