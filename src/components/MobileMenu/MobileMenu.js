/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile menu">
        <Side>
          <CloseButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" strokeWidth={2} size={24} />
          </CloseButton>
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-gray-700-alpha-800);
  display: flex;
`;

const Content = styled(DialogContent)`
  background: var(--color-white);
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(85%, 300px);
  overflow: auto;

  display: flex;
  flex-direction: column;
  padding: 26px var(--spacing) 32px 32px;
`;

const Side = styled.div`
  flex: 1;
  align-self: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.nav`
  font-weight: 600;
  font-size: calc(18 / 16 * 1rem);
  line-height: 21px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-style: normal;
  font-weight: ${WEIGHTS.normal};
  font-size: calc(14 / 16 * 1rem);
  line-height: 16px;
  color: var(--color-gray-700);
  text-decoration: none;
`;

export default MobileMenu;
