import { Container } from './style';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { MdClose } from 'react-icons/md';

interface NavigationProps {
  setIsNavOpen: () => void;
  isNavOpen: boolean;
}

export const Navigation = ({ setIsNavOpen, isNavOpen }: NavigationProps) => {
  const { pathname } = useLocation();
  const navList = [
    { title: '제주도 날씨', path: '/' },
    { title: '관광지 추천', path: '/tourlist' },
    { title: '한라산 입하산허용시간', path: '/hallasan' },
  ];

  return (
    <Container isNavOpen={isNavOpen}>
      <ul>
        {navList.map((nav, idx) => (
          <li key={idx}>
            <NavLink to={nav.path} onClick={setIsNavOpen}>
              {nav.title}
            </NavLink>
            {pathname === nav.path && <motion.div className="line" layoutId="line" />}
          </li>
        ))}
      </ul>
      <Button type="button" className="header__nav-close" onClick={setIsNavOpen}>
        <MdClose />
      </Button>
    </Container>
  );
};
