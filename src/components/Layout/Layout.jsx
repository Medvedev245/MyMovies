import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Navbar, Link, Main } from './Layout.styled';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <LogoComponent />
        <Navbar>
          <Link to="/">Home page</Link>
          <Link to="/movies">Find by category</Link>
          <Link to="/about">About us</Link>
          <Link to="/contacts">Contacts</Link>
        </Navbar>
      </Header>

      <Main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
