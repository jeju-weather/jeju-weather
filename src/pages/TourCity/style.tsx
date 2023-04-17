import styled from 'styled-components';
import { Tabs } from '@mui/material';

export const Title = styled.h2`
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.4rem;
  text-align: left;
`;

export const TabBox = styled(Tabs)`
  .MuiTabs-scroller {
    .MuiTabs-flexContainer {
      width: 100%;
      gap: 10px;
      flex-wrap: wrap;

      .MuiButtonBase-root {
        width: fit-content;
        border: 1px solid #4d4d4d;
        border-radius: 30px;
        transition: background 0.5s;
        color: ${({ theme }) => theme.text.basic};
        font-size: 1.1em;

        &.Mui-selected {
          color: ${({ theme }) => theme.text.point};
          border: 1px solid ${({ theme }) => theme.background.point};
        }
      }
    }

    .MuiTabs-indicator {
      display: none;
    }

    @media ${({ theme }) => theme.device.mobile} {
      .MuiTabs-flexContainer {
        .MuiButtonBase-root {
          flex-shrink: 0;
          flex-basis: fit-content;
          min-width: fit-content;
        }
      }
    }
  }
`;
export const TabPanel = styled.div`
  padding: 50px 0;
  > p {
    padding: 20px 0;
    span {
      color: ${({ theme }) => theme.text.point};
    }
  }
`;
