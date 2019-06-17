import React from "react";
import Nav from "./nav";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Nav />
    {children}
  </div>
);

export default Layout;
