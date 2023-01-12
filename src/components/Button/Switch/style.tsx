import styled from 'styled-components';

export const Container = styled.div<{ isdark: boolean }>`
  position: fixed;
  z-index: 25;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 30px;
  background-color: ${(props) => props.theme.background.point};
  display: flex;
  justify-content: ${(props) => (props.isdark ? 'flex-end' : 'flex-start')};
  align-items: center;
  border-radius: 50px;
  padding: 0 5px;
  cursor: pointer;

  .handle {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222831;
  }
`;
