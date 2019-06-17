import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages";
import About from "../pages/about";
import Posts from "../pages/posts";

export default function() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/about" component={About} />
    </Router>
  );
}
