import React, { useEffect, useRef } from 'react';
import { NavBarButton } from './style';

interface NavButtonProps {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNavOpen: boolean;
}

export const NavButton = ({ setIsNavOpen, isNavOpen }: NavButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const onClickNavButton = () => {
    setIsNavOpen((prev) => !prev);
    if (buttonRef.current) {
      !isNavOpen
        ? buttonRef.current.classList.add('active')
        : buttonRef.current.classList.remove('active');
    }
  };

  useEffect(() => {
    if (buttonRef.current) {
      isNavOpen
        ? buttonRef.current.classList.add('active')
        : buttonRef.current.classList.remove('active');
    }
  }, [isNavOpen]);

  return (
    <NavBarButton className="header__nav-menubar" ref={buttonRef} onClick={onClickNavButton}>
      <span className="bar"></span>
    </NavBarButton>
  );
};
