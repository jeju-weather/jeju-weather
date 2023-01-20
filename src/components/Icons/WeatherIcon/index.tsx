export const WeatherIcon = ({ iconName }: { iconName: string }) => {
  const ImageUrl = require(`assets/images/weather/${iconName}.png`);

  return <img src={ImageUrl} alt="날씨아이콘" />;
};
