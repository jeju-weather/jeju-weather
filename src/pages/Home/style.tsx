import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const JejuMap = styled.div`
  margin-top: 100px;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  width: fit-content;
  img {
    max-width: 100%;
  }

  button {
    position: absolute;
    font-size: 1.5rem;
    top: 53%;
    left: 12%;
    font-weight: 600;
    color: ${({ theme }) => theme.text.basic};

    &.active {
      color: ${({ theme }) => theme.text.point};
    }

    &:nth-child(2) {
      top: 22%;
      left: 42%;
    }

    &:nth-child(3) {
      top: 24%;
      left: 79%;
    }

    &:nth-child(4) {
      top: 54%;
      left: 46%;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    button {
      font-size: 1.1rem;
      top: 46%;
      left: 9%;

      &:nth-child(2) {
        top: 19%;
        left: 40%;
      }

      &:nth-child(3) {
        top: 20%;
        left: 74%;
      }

      &:nth-child(4) {
        top: 48%;
        left: 42%;
      }
    }
  }
`;
