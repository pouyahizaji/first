import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My shop</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
