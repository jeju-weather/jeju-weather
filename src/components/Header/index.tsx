import Logo from 'assets/images/logo.png';
import { Container } from './style';
import { MdMenu } from 'react-icons/md';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Navigation } from 'components/Navigation';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Container>
      <h1>
        <Link to="/">
          <img src={Logo} alt="jeju weather logo" />
          <span>Jeju weather</span>
        </Link>
      </h1>
      <Navigation setIsNavOpen={() => setIsNavOpen((prev) => !prev)} isNavOpen={isNavOpen} />
      <Button
        type="button"
        className="header__nav-menubar"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <MdMenu />
      </Button>
    </Container>
  );
};
