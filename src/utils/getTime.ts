export const getTime = (time: number) => {
  const convertTime = new Date(time * 1000).getTime();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  return {
    hour: new Date(convertTime).getHours(),
    minutes: new Date(convertTime).getMinutes(),
    month: new Date(convertTime).getMonth() + 1,
    date: new Date(convertTime).getDate(),
    day: week[new Date(convertTime).getDay()],
  };
};
