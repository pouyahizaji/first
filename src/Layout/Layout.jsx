import { Outlet } from "react-router-dom";

export const Layout = () => {
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
