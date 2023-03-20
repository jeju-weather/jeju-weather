import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ListBox } from './style';

export const TourCity = () => {
  return (
    <>
      <ListBox>
        <ul>
          {locationList.map((location) => (
            <li key={location.link}>
              <Button>
                <Link to={location.link}>{location.title}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </ListBox>
    </>
  );
};

const locationList = [
  {
    title: '제주시',
    link: 'jeju',
  },
  {
    title: '서귀포시',
    link: 'seogwipoog',
  },
  {
    title: '서부',
    link: 'jejuwest',
  },
  {
    title: '동부',
    link: 'jejeeast',
  },
];
