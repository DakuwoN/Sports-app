import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";  // Your existing Header component

function Layout() {
  return (
    <>
      <Header />  {/* Header remains constant */}
      <main>
        <Outlet />  {/* This will render the routed content */}
      </main>
    </>
  );
}

export default Layout;
