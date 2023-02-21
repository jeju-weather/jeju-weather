import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.background.nav};

  .header__h1-title {
    padding: 20px;

    img {
      width: 80px;
    }

    h1 {
      display: inline;
      font-size: 0;
    }
  }

  .header__nav-menubar {
    display: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    button {
      width: 50px;
      display: flex;
      aspect-ratio: 1 / 1;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.8rem;
      color: ${(props) => props.theme.text.basic};
    }

    .header__nav-menubar {
      display: block;
    }
  }
`;
