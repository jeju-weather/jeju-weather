import styled from 'styled-components';
export const JejuMap = styled.section`
  margin: 0 auto;
  width: fit-content;
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  img {
    max-width: 80%;
  }

  button {
    position: absolute;
    font-size: 1.5rem;
    top: 53%;
    left: 18%;
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
      left: 72%;
    }

    &:nth-child(4) {
      top: 54%;
      left: 46%;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    img {
      max-width: 100%;
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

export const DailyWeather = styled.section`
  width: 60%;
  padding: 40px 20px;
  border-radius: 20px;
  border: 3px dashed ${({ theme }) => theme.background.banner};
  margin-bottom: 100px;

  .weather-container {
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
  }

  .home__daily-title {
    flex-direction: column;
    gap: 20px;

    h3 {
      font-size: 1.5rem;
    }

    button {
      background-color: ${({ theme }) => theme.background.point};
      color: inherit;
      font-weight: 600;
    }
  }

  .home__daily-temperature {
    gap: 30px;

    img {
      width: 100px;
    }

    p {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  .home__daily-sunrise {
    gap: 20px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      p {
        padding-top: 4px;
      }
    }
  }

  .home__daily-info {
    gap: 30px;
    margin: 0 auto;
    width: 60%;

    li {
      padding: 0 20px;
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      border-radius: 20px;
      white-space: nowrap;

      h4 {
        position: relative;
        font-size: 1.3rem;
        width: fit-content;

        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 50px;
          height: 3px;
          background: ${({ theme }) => theme.background.point};
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      p {
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

export const TimelyWeather = styled.section`
  width: 60%;
  display: flex;
  padding: 20px;
  margin-bottom: 100px;

  ul {
    li {
      margin: 10px 0;
      white-space: nowrap;
    }
  }

  .home__timely-title {
    li {
      font-weight: 600;

      &:first-child {
        height: 134px;
      }
    }
  }

  .home__timely-list {
    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
      height: 10px;
      background: #282a3a;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: ${({ theme }) => theme.background.banner};
    }

    ul {
      li {
        text-align: center;

        img {
          width: 80px;
          -webkit-user-select: none;
          -webkit-user-drag: none;
        }
      }
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;
