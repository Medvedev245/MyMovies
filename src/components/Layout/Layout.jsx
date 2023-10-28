import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <NavLink to="/">Home 1</NavLink>
      <NavLink to="/movies">KeyWordSerch</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
