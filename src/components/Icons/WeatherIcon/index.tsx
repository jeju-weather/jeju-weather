export const WeatherIcon = ({ iconName }: { iconName: string }) => {
  return <img src={process.env.PUBLIC_URL + `/images/weather/${iconName}.png`} alt="날씨아이콘" />;
};
