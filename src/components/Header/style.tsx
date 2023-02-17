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
  justify-content: center;
  background: ${({ theme }) => theme.background.nav};

  h1 {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding-left: 250px;

    img {
      width: 200px;
    }

    span {
      font-size: 0;
    }
  }

  .header__nav-menubar {
    display: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    h1 {
      padding: 0;
      img {
        width: 150px;
      }
    }

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
      display: flex;
      position: absolute;
      z-index: 10;
      right: 0px;
      top: 15px;
    }
  }
`;
