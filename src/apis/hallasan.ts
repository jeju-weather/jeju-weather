import axios from 'axios';

export const getHallasan = async () => {
  const { data } = await axios(
    `https://api.odcloud.kr/api/15056441/v1/uddi:1635e441-a1c9-42c1-95a8-a2b4891245bb_201911141055?serviceKey=${process.env.REACT_APP_HANLA_MOUNTAIN_KEY}`
  );

  return data;
};
