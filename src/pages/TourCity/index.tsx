import React, { useEffect, useState } from 'react';
import * as style from './style';
import { Tab } from '@mui/material';
import { Box } from '@mui/system';
import useAxios from 'hooks/useAxios';
import { TourlistInfoTypes } from 'types/tourlist';
import { Loader, TourList } from 'components';

export const TourCity = () => {
  const [tabValueLocation, setTabValueLocation] = useState(0);
  const [region, setRegion] = useState('');
  const { isLoading, data } = useAxios<{ items: TourlistInfoTypes[] }>({
    queryId: 'tourlist',
    method: 'get',
    url: `http://api.visitjeju.net/vsjApi/contents/searchList`,
    params: {
      apiKey: process.env.REACT_APP_TOUR_KEY,
      locale: 'kr',
    },
  });
  const [tourList, setTourList] = useState<TourlistInfoTypes[]>();

  const handleChangeLocation = (_: React.SyntheticEvent, newValue: number) => {
    let getRegion =
      jejuLocationList[newValue].substring(1) === '전체'
        ? ''
        : jejuLocationList[newValue].substring(1);
    setTabValueLocation(newValue);
    setRegion(getRegion);
  };

  useEffect(() => {
    if (data) {
      const filteredList = data.items.filter((item) => {
        if (region) {
          return JSON.stringify(item).includes(region);
        } else {
          return item;
        }
      });
      setTourList(filteredList);
    }
  }, [region, data, tabValueLocation]);

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <Box>
            <style.TabBox value={tabValueLocation} onChange={handleChangeLocation}>
              {jejuLocationList.map((list) => (
                <Tab label={list} key={list} />
              ))}
            </style.TabBox>
          </Box>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <style.TabPanel>
            <p>
              <span>{tourList?.length}</span> 개의 결과가 있습니다
            </p>
            {tourList?.map((list, idx) => (
              <div key={idx}>
                <Box>
                  <ul>
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <TourList
                        title={list.title}
                        address={list.address}
                        summary={list.introduction}
                        imgUrl={list.repPhoto.photoid.thumbnailpath}
                        tags={list.alltag ? list.alltag.split(',') : []}
                      />
                    )}
                  </ul>
                </Box>
              </div>
            ))}
          </style.TabPanel>
        )}
      </Box>
    </>
  );
};

const jejuLocationList = [
  '#전체',
  '#제주시내',
  '#애월',
  '#한림',
  '#한경',
  '#조천',
  '#구좌',
  '#우도',
  '#추자',
  '#성산',
  '#서귀포시내',
  '#대정',
  '#안덕',
  '#중문',
  '#남원',
  '#표선',
];
