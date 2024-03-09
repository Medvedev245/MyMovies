import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Navbar, Link, Main, Button } from './Layout.styled';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import { Footer } from 'components/Footer/Footer';
import { useState } from 'react';
import { BurgerComponent } from 'components/BurgerComponent/BurgerComponent';
import { Close } from 'components/Close/Close';
import { BlurBackground } from 'components/BlurBackground/BlurBackground';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen}>
      <Header>
        <LogoComponent />
        <BurgerComponent onClick={toggleMenu} />
        <Navbar isOpen={isOpen}>
          <>
            <Link to="/">Home page</Link>
            <Link to="/movies">Find by Name</Link>
            <Link to="/about">About us</Link>
            <Link to="/contacts">Contacts</Link>
            <Close onClick={toggleMenu} />
          </>
        </Navbar>
      </Header>

      <Main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
      {isOpen && <BlurBackground />}
    </Container>
  );
};
