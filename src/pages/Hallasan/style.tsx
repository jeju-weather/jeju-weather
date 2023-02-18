import styled from 'styled-components';
import { ToggleButtonGroup } from '@mui/material';

export const HallasanMap = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: block;
    margin-bottom: 30px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    ul {
      justify-content: start;
    }
  }
`;
export const CustomToggleButtonGroup = styled(ToggleButtonGroup)`
  justify-content: center;
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 10px;
    background: #282a3a;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${({ theme }) => theme.background.banner};
  }
  .MuiToggleButtonGroup-grouped {
    border: 0;
    padding: 5px 20px;
    margin-bottom: 20px;
    margin-right: 10px;
    border-radius: 50px !important;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
    justify-content: start;
    &.Mui-selected {
      background-color: ${({ theme }) => theme.background.point};
      color: #fff;
      &:hover {
        background-color: ${({ theme }) => theme.background.point};
        color: #fff;
      }
    }
    &:hover {
      background-color: ${({ theme }) => theme.background.nav};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: start;
  }
`;

export const HallasanInfo = styled.section`
  width: 100%;
  max-width: 60%;
  margin-top: 35px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  h3 {
    text-align: left;
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 35px;
  }
  .info-wrap {
    display: flex;
    justify-content: space-between;
    ul {
      border-right: 1px solid #b0b0b0;
      width: 30%;
      li {
        height: 3em;
        line-height: 1.5;
        margin-bottom: 15px;
      }
    }
    .info-list-wrap {
      flex-grow: 2;
      display: flex;
      width: 70%;
      justify-content: space-around;
      ul {
        width: 100%;
        &:last-child {
          border-right: 0;
        }
        li {
          text-align: center;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    max-width: 100%;
    padding: 20px 15px;
    h3 {
      font-size: 1.2rem;
    }
    .info-wrap {
      ul {
        li {
          font-size: 0.8rem;
        }
      }
      .info-list-wrap {
        ul {
          li {
          }
        }
      }
    }
  }
`;
