import styled from 'styled-components';

export const Container = styled.nav<{ isNavOpen: boolean }>`
  white-space: nowrap;
  padding-right: 50px;

  ul {
    align-items: center;
    display: flex;
    gap: 20px;

    li {
      position: relative;
      height: 100%;

      a {
        padding: 10px;
        transition: background 0.5s;
        border-radius: 20px;
        font-weight: 600;

        &.active {
          color: ${({ theme }) => theme.text.point};
        }
      }

      .line {
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 3px;
        background-color: ${({ theme }) => theme.background.point};
      }
    }
  }

  .header__nav-close {
    display: none;
  }

  @media ${({ theme }) => theme.device.tablet} {
    position: fixed;
    z-index: 20;
    top: 0;
    opacity: ${({ isNavOpen }) => (isNavOpen ? '100%' : '0')};
    right: ${({ isNavOpen }) => (isNavOpen ? 0 : '-100%')};
    transition: opacity 0.5s;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;

    ul {
      flex-direction: column;
      gap: 100px;

      li {
        font-size: 1.2rem;

        .line {
          display: none;
        }
      }
    }

    .header__nav-close {
      display: flex;
      position: absolute;
      top: 22px;
      right: 10px;
      color: #fff;
    }
  }
`;
