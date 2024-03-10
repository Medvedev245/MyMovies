import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  padding-top: 80px;
  background: linear-gradient(90deg, #d8ecca, #82af95, #a9cba4);
  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 0 40px;
  top: 0;
  position: fixed;
  height: 60px;
  background-color: var(--header);
  justify-content: space-evenly;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: top 1.3s ease-in-out, right 1.3s ease-in-out;

  @media screen and (max-width: 1439px) {
    /* display: none; */
  }

  @media screen and (max-width: 800px) {
    z-index: 10;
    position: absolute;
    width: 50%;
    height: 100vh;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-50%')};
    justify-content: flex-start;
    background-color: #203f43;
    flex-direction: column;
    gap: 60px;
    padding-top: 90px;
  }
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
  }

  &:hover,
  &:focus {
    text-shadow: 0 0 2px var(#182363);
    color: #182363;
    transition: all 0.4s ease;
  }
  @media screen and (max-width: 1439px) {
    width: 110px;
    height: 35px;
    font-weight: 700;
    font-size: 15px;
  }
`;

export const Main = styled.main`
  min-height: 91vh;
  margin: auto;
  padding: 0 40px;
  width: 1440px;

  //Tablet
  @media screen and (max-width: 1439px) {
    width: 700px;
  }

  @media screen and (max-width: 800px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;

    padding-left: 0px;
    padding-right: 0px;
  }
`;
