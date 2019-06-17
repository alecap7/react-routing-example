import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch to="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="/posts">
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
