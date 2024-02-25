import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 300vh;
  position: relative;
  padding: 80px 0;

  background: -webkit-linear-gradient(
    90deg,
    #d8ecca,
    #b5bbde,
    #a9cba4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    90deg,
    #d8ecca,
    #b5bbde,
    #a9cba4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-color: var(--iq-secondary);
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 0 40px;
  top: 0;
  position: fixed;
  height: 75px;
  background-color: var(--header);
  justify-content: space-evenly;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  /* gap: 5px; */
  align-items: center;
  justify-content: space-evenly;
`;

// export const LogoContaoneer = styled.div`
//   width: 100px;
// `;

export const Link = styled(NavLink)`
  width: 225px;
  height: 45px;
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
