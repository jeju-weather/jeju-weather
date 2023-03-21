import { City } from 'const/TourCity';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ListBox } from './style';

export const TourCity = () => {
  const getCityList = Object.keys(City);
  return (
    <>
      <ListBox>
        <ul>
          {getCityList.map((location) => (
            <li key={City[location]}>
              <Link to={location}>
                <Button>{City[location]}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </ListBox>
    </>
  );
};
