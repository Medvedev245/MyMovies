import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-height: 85vh;
  height: 100%;
  position: relative;
  padding-top: 80px;
  /* padding-bottom: 40px; */

  /* background: -webkit-linear-gradient(90deg, #d8ecca, #223186, #a9cba4); */
  background: linear-gradient(90deg, #d8ecca, #82af95, #a9cba4);
  /* background-color: var(--iq-secondary); */
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 0 40px;
  top: 0;
  position: fixed;
  height: 50px;
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
  border-radius: 20px;
  /* background: var(--iq-title-text); */
  background: radial-gradient(#0c582f, #b8d8e5);

  &.active {
    color: #182363;
    /* background-color: #182363 */
  }

  &:hover,
  &:focus {
    /* box-shadow: 0 0 20px var(--iq-primary); */
    text-shadow: 0 0 2px var(#182363);
    color: #182363;
    transition: all 0.4s ease;
  }
`;

export const Main = styled.main`
  padding: 0 40px;
`;
