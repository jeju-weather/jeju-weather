import { Container, JejuMap } from './style';
import jejuMap from 'assets/images/jeju_map.png';
import { Button } from '@mui/material';
import { useState } from 'react';

export const Home = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <Container>
      <JejuMap>
        <div>
          <img src={jejuMap} alt="제주지도" />
          {['제주시', '성산시', '서귀포시', '고산시'].map((location, idx) => (
            <Button
              key={idx}
              type="button"
              onClick={() => setActiveLocation(idx)}
              className={activeLocation === idx ? 'active' : ''}
            >
              {location}
            </Button>
          ))}
        </div>
      </JejuMap>
      <div className="daily-weather"></div>
      <div className="timely-weather"></div>
      <div className="weekly-weather"></div>
    </Container>
  );
};
