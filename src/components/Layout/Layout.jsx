import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Navbar, Link, Main, Button } from './Layout.styled';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import { Footer } from 'components/Footer/Footer';
import { useState } from 'react';
import { BurgerComponent } from 'components/BurgerComponent/BurgerComponent';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Header>
        <LogoComponent />
        <BurgerComponent isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <Navbar>
          <Link to="/">Home page</Link>
          <Link to="/movies">Find by Name</Link>
          <Link to="/about">About us</Link>
          <Link to="/contacts">Contacts</Link>
        </Navbar>
      </Header>

      <Main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
