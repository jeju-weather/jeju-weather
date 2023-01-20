import { Container } from './style';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { changeTheme } from 'store/modules/theme';
import { MdDarkMode, MdBrightnessLow } from 'react-icons/md';

export const ThemeSwitch = () => {
  const isDark = useAppSelector(({ theme }) => theme.value);
  const dispatch = useAppDispatch();

  return (
    <Container $isdark={isDark} onClick={() => dispatch(changeTheme())}>
      <div className="handle">{isDark ? <MdBrightnessLow /> : <MdDarkMode />}</div>
    </Container>
  );
};
