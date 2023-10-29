import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Navbar } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navbar>
          <NavLink to="/">Home 1</NavLink>
          <NavLink to="/movies">KeyWordSerch</NavLink>
        </Navbar>
      </Header>

      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
