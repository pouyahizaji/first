import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header
        style={{
          height: "100px",
          width: "100rem",
          backgroundColor: "white",
        }}
      >
        btyhn7nyb
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
