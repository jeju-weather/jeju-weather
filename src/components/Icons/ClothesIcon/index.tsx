import { Container } from './style';
import { useEffect, useState } from 'react';

interface ClothesIconProps {
  isLoading: boolean;
  temp: number;
}
export const ClothesIcon = ({ isLoading, temp }: ClothesIconProps) => {
  const [clothes, setClothes] = useState([0, 0]);

  useEffect(() => {
    if (temp >= 27) {
      setClothes([1, 7]);
    } else if (temp < 27 && temp >= 23) {
      setClothes([2, 5]);
    } else if (temp < 23 && temp >= 20) {
      setClothes([3, 5]);
    } else if (temp < 20 && temp >= 17) {
      setClothes([4, 6]);
    } else if (temp < 17 && temp >= 12) {
      setClothes([5, 5]);
    } else if (temp < 12 && temp >= 10) {
      setClothes([6, 4]);
    } else if (temp < 10 && temp >= 6) {
      setClothes([7, 4]);
    } else {
      setClothes([8, 5]);
    }
  }, [temp]);

  return (
    <Container>
      <h3>추천 옷차림</h3>
      {isLoading ? null : (
        <div className="clothes__list">
          {Array.from({ length: clothes[1] }, (_, i) => i).map((_, idx) => (
            <img key={idx} src={`images/clothes/${clothes[0]}/${idx + 1}.png`} alt="옷아이콘" />
          ))}
        </div>
      )}
    </Container>
  );
};
