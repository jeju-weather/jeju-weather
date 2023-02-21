import Logo from 'assets/images/logo.png';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { Navigation, NavButton } from 'components';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const onClickMenu = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
          setIsNavOpen(false);
        }
      });
    }
  }, []);

  return (
    <Container>
      <div className="header__h1-title">
        <Link to="/">
          <img src={Logo} alt="jeju weather logo" />
          <h1>Jeju weather</h1>
        </Link>
      </div>
      <Navigation setIsNavOpen={onClickMenu} isNavOpen={isNavOpen} />
      <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </Container>
  );
};
