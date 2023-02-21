import styled from 'styled-components';

export const NavBarButton = styled.div`
  position: relative;
  z-index: 20;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 3px;

  .bar {
    display: block;
    width: 0px;
    height: 4px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.text.basic};
    margin-top: 28px;
    margin-left: 9px;
    position: relative;

    &::before {
      content: '';
      width: 30px;
      height: 4px;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.text.basic};
      position: absolute;
      left: 0;
      bottom: 0;
      transition: transform 0.3s;
    }

    &::after {
      content: '';
      width: 30px;
      height: 4px;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.text.basic};
      position: absolute;
      left: 0;
      bottom: 0;
      transition: transform 0.3s;
    }
  }

  &.active span::before {
    transform: rotate(45deg);
    transition: transform 0.3s 0.3s;
    background-color: #fff;
  }

  &.active span::after {
    transform: rotate(-45deg);
    transition: transform 0.3s 0.3s;
    background-color: #fff;
  }

  &::before {
    content: '';
    width: 30px;
    height: 4px;
    background-color: ${({ theme }) => theme.text.basic};
    border-radius: 3px;
    position: absolute;
    right: 21px;
    bottom: 19px;
    transition: width 0.3s;
  }

  &::after {
    content: '';
    width: 30px;
    height: 4px;
    background-color: ${({ theme }) => theme.text.basic};
    border-radius: 3px;
    position: absolute;
    left: 9px;
    top: 19px;
    transition: width 0.3s;
  }

  &.active::before {
    width: 0;
    right: 9px;
    bottom: 17px;
    background-color: ${({ theme }) => theme.text.basic};
  }

  &.active::after {
    width: 0;
    left: 9px;
    top: 17px;
    background-color: ${({ theme }) => theme.text.basic};
  }
`;
