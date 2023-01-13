import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

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

  @media ${({ theme }) => theme.device.mobile} {
    h1 {
      img {
        width: 150px;
      }
    }
  }
`;
