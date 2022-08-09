import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileOnlySide>
          <Icon id="shopping-bag" strokeWidth={2} size={24} />
          <Icon id="search" strokeWidth={2} size={24} />
          <MenuButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open Menu</VisuallyHidden>
            <Icon id="menu" strokeWidth={2} size={24} />
          </MenuButton>
        </MobileOnlySide>
      </MainHeader>

       <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px var(--spacing);
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
`;

const Nav = styled.nav`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    gap: clamp(
      1rem,
      10vw - 7rem,
      3rem
    );
    margin: 0px 48px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const MobileOnlySide = styled(Side)`
  display: flex;
  gap: var(--spacing);
  justify-content: flex-end;
  align-items: baseline;

  @media ${QUERIES.desktopAndUp} {
    & > * {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

export default Header;
