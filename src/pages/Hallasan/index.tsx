import { useState } from 'react';
import * as style from './style';
import { ToggleButton } from '@mui/material';
import useAxios from 'hooks/useAxios';
import { HallasanInfoTypes } from 'types/hallasan';
import { Loader } from 'components';
import hallasanMap from 'assets/images/hallasan/map.png';

export const Hallasan = () => {
  const [selectCourse, setSelectCourse] = useState('어승생악코스');
  const { isLoading, data } = useAxios<HallasanInfoTypes>({
    queryId: 'hallasanInfo',
    method: 'get',
    url: `https://api.odcloud.kr/api/15056441/v1/uddi:1635e441-a1c9-42c1-95a8-a2b4891245bb_201911141055`,
    params: {
      serviceKey: decodeURIComponent(process.env.REACT_APP_HANLA_MOUNTAIN_KEY),
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleChangeCourse = (name: string) => {
    setSelectCourse(name);
  };

  return (
    <>
      <style.HallasanMap>
        <img src={hallasanMap} alt="한라산 등산코스 지도" />
        <style.CustomToggleButtonGroup orientation="horizontal" value={selectCourse} exclusive>
          {hallasanCourseName.map((courseName) => (
            <ToggleButton
              value={courseName + '코스'}
              key={courseName + '코스'}
              onClick={() => handleChangeCourse(courseName + '코스')}
            >
              {courseName}탐방로
            </ToggleButton>
          ))}
        </style.CustomToggleButtonGroup>
      </style.HallasanMap>
      {selectCourse !== '' ? (
        <style.HallasanInfo>
          <h3> {selectCourse}</h3>
          <div className="info-wrap">
            <ul>
              <li>
                동절기
                <br />
                (11/12/1/2월)
              </li>
              <li>
                춘추절기
                <br />
                (3/4/9/10월)
              </li>
              <li>
                하절기
                <br />
                (5/6/7/8월)
              </li>
              <li>통제장소</li>
            </ul>
            <div className="info-list-wrap">
              {data.data
                .filter((args) => args['탐방로별'] === selectCourse)
                .map((infos, index) => (
                  <ul key={index}>
                    <li>{infos.동절기}</li>
                    <li>{infos.춘추절기}</li>
                    <li>{infos.하절기}</li>
                    <li>{infos.통제장소}</li>
                  </ul>
                ))}
            </div>
          </div>
        </style.HallasanInfo>
      ) : null}
    </>
  );
};

const hallasanCourseName = ['어승생악', '어리목', '영실', '성판악', '관음사', '돈내코'];
