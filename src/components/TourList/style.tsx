import styled from 'styled-components';
import { Button, Menu, Tabs } from '@mui/material';

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

export const TabBox = styled(Tabs)`
  .MuiTabs-scroller {
    .MuiTabs-flexContainer {
      width: 100%;
      justify-content: space-between;
      gap: 10px;

      .MuiButtonBase-root {
        border: 2px solid #4d4d4d;
        border-radius: 30px;
        transition: background 0.5s;
        color: ${({ theme }) => theme.text.basic};
        font-weight: 600;
        flex-basis: calc(100% / 5);
        flex-shrink: inherit;

        &.Mui-selected {
          color: #fff;
          border: 2px solid ${({ theme }) => theme.background.point};
          background: ${({ theme }) => theme.background.point};
        }
      }
    }

    .MuiTabs-indicator {
      display: none;
    }

    @media ${({ theme }) => theme.device.mobile} {
      .MuiTabs-flexContainer {
        justify-content: space-between;

        .MuiButtonBase-root {
          flex-shrink: 0;
          flex-basis: fit-content;
          min-width: fit-content;
        }
      }
    }
  }
`;

export const OptionButon = styled(Button)`
  &.MuiButtonBase-root {
    background-color: transparent;
    color: ${({ theme }) => theme.text.basic};
    border: 2px solid #4d4d4d;
    margin-bottom: 20px;

    &:hover {
      background-color: ${({ theme }) => theme.background.point};
      color: #fff;
      border: 2px solid ${({ theme }) => theme.background.point};
    }
  }
`;

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border-radius: 6px;
    margin-top: 41px;
    min-width: 180px;
    color: #000;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    .MuiMenuItem-root {
      justify-content: center;
      padding: 0;

      a {
        padding: 10px;
        display: inline-block;
        width: 100%;
        text-align: center;
      }

      .MuiSvgIcon-root {
        font-size: 18;
        color: #000;
        margin-right: 10px;
      }

      &:active {
        background-color: '#fff';
      }
    }
  }
`;
