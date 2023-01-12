import { Container } from './style';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { changeTheme } from 'store/modules/theme';
import { motion } from 'framer-motion';
import { MdDarkMode, MdBrightnessLow } from 'react-icons/md';

export const ThemeSwitch = () => {
  const isDark = useAppSelector(({ theme }) => theme.value);
  const dispatch = useAppDispatch();
  return (
    <Container isdark={isDark} onClick={() => dispatch(changeTheme())}>
      <motion.div className="handle" layout transition={{ type: 'spring', stiffness: 100 }}>
        {isDark ? <MdBrightnessLow /> : <MdDarkMode />}
      </motion.div>
    </Container>
  );
};
