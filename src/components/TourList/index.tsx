import React, { useState } from 'react';
import * as style from './style';
import { City } from 'const/TourCity';
import { MenuItem, Tab } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { TourInfo } from './TourInfo';

export const TourList = () => {
  const { location } = useParams();
  const CityList = Object.keys(City);
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeTabs = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <style.Title>{location && City[location]} 추천 명소</style.Title>
      <div>
        <style.OptionButon
          id="demo-customized-button"
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<MdKeyboardArrowDown />}
        >
          {location && City[location]}
        </style.OptionButon>
        <style.StyledMenu
          id="demo-customized-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={0}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {CityList.map((list) => (
            <MenuItem key={list} onClick={handleClose} disableRipple>
              <Link to={`/tourcity/${list}`}>{City[list]}</Link>
            </MenuItem>
          ))}
        </style.StyledMenu>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box>
          <style.TabBox value={tabValue} onChange={handleChangeTabs}>
            {recomandList.map((list) => (
              <Tab label={list} key={list} />
            ))}
          </style.TabBox>
        </Box>
        {recomandList.map((_, idx) => (
          <div role="tabpanel" hidden={tabValue !== idx} id={`jejeu-tabpanel-${idx}`} key={idx}>
            {tabValue === idx && (
              <Box>
                <ul>
                  <TourInfo
                    title="해변"
                    starRate={4.1}
                    address="제주시 제주제주동"
                    summary="제주에서 제일 아름다운 해변"
                  />
                </ul>
              </Box>
            )}
          </div>
        ))}
      </Box>
    </>
  );
};

const recomandList = ['전체', '해변', '맛집/카페', '관광지', '액티비티'];
