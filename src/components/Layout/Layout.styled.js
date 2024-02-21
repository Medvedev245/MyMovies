import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 300vh;
  position: relative;
  padding: 80px 0;
  background-color: var(--iq-secondary);
`;

export const Header = styled.header`
  display: flex;
  padding: 0 40px;
  top: 0;
  position: fixed;
  height: 60px;
  gap: 50px;
  justify-content: space-evenly;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  /* gap: 5px; */
  align-items: center;
  justify-content: space-between;
`;

export const LogoContaoneer = styled.div`
  width: 100px;
  /* height: 100px; */
  /* background-color: red; */
`;

export const Link = styled(NavLink)`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color: var(--iq-light-primary);
  border-radius: 4px;
  background: var(--iq-title-text);
  &.active {
    color: var(--iq-primary-hover);
    /* background-color: var(--iq-body-BG); */
  }

  &:hover,
  &:focus {
    /* box-shadow: 0 0 20px var(--iq-primary); */
    text-shadow: 0 0 2px var(--iq-primary);
    color: var(--iq-primary);
    transition: all 0.4s ease;
  }
`;

export const Main = styled.main`
  padding: 0 40px;
`;
