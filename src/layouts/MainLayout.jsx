import React from "react";
import Navbars from "../shared/Navbars";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbars />
      <div className="container">{children}</div>
    </>
  );
};

export default MainLayout;
