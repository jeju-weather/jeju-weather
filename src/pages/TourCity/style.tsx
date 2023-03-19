import styled from 'styled-components';

export const ListBox = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    gap: 20px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-basis: 25%;
      border: 2px solid ${({ theme }) => theme.background.point};
      border-radius: 10px;
      aspect-ratio: 1 / 1;
      cursor: pointer;
      transition: background 0.5s;
      button {
        width: 100%;
        height: 100%;
        color: inherit;
        font-size: 1.5rem;
        padding: 20px;
      }
      &:hover {
        background: ${({ theme }) => theme.background.point};
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-start;
    ul {
      flex-direction: column;
      li {
        aspect-ratio: auto;
      }
    }
  }
`;
