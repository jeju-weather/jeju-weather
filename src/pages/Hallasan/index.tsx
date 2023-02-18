import { HallasanMap, HallasanInfo, CustomToggleButtonGroup } from './style';
import { getHallasan } from 'apis';
import hallasanMap from 'assets/images/hallasan/map.png';
import { useEffect, useState } from 'react';
import { HallasanInfoTypes, InfoDataTypes } from 'types/hallasan';
import { ToggleButton } from '@mui/material';

export const Hallasan = () => {
  const [hallasanInfo, setHallasanInfo] = useState<HallasanInfoTypes>();
  const [selectCourse, setSelectCourse] = useState('');
  const [selectCourseInfo, setSelectCourseInfo] = useState<InfoDataTypes[]>();

  const handleChangeCourse = (name: string) => {
    setSelectCourse(name);
    const list = hallasanInfo?.data.filter((args) => args['탐방로별'] === name);
    setSelectCourseInfo(list);
  };

  useEffect(() => {
    (async () => {
      const getHallasanInfo = await getHallasan();
      setHallasanInfo(getHallasanInfo);
    })();
  }, []);

  return (
    <>
      <HallasanMap>
        <img src={hallasanMap} alt="한라산 등산코스 지도" />
        <CustomToggleButtonGroup orientation="horizontal" value={selectCourse} exclusive>
          {hallasanCourseName.map((courseName) => (
            <ToggleButton
              value={courseName + '코스'}
              key={courseName + '코스'}
              onClick={() => handleChangeCourse(courseName + '코스')}
            >
              {courseName}탐방로
            </ToggleButton>
          ))}
        </CustomToggleButtonGroup>
      </HallasanMap>
      {selectCourse !== '' ? (
        <HallasanInfo>
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
              {selectCourseInfo?.map((infos, index) => (
                <ul key={index}>
                  <li>{infos.동절기}</li>
                  <li>{infos.춘추절기}</li>
                  <li>{infos.하절기}</li>
                  <li>{infos.통제장소}</li>
                </ul>
              ))}
            </div>
          </div>
        </HallasanInfo>
      ) : null}
    </>
  );
};

const hallasanCourseName = ['어승생악', '어리목', '영실', '성판악', '관음사', '돈내코'];
