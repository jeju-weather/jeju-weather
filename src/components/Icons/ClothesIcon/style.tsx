import styled from 'styled-components';

export const Container = styled.section`
  width: 60%;
  margin-bottom: 30px;

  h3 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 50px;
  }

  .clothes__list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 30px;
    padding-bottom: 20px;

    img {
      width: 100px;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    .clothes__list {
      justify-content: initial;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        height: 10px;
        background: #282a3a;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: ${({ theme }) => theme.background.banner};
      }
    }
  }
`;
