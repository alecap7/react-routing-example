import React from "react";
import { Route, Link } from "react-router-dom";
import Layout from "../components/layout";

const Post = function({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
};

const Posts = function({ match }) {
  return (
    <Layout>
      <h2>Posts</h2>
      <ul>
        <li>
          <Link to={`${match.url}/post1`}>Post1</Link>
        </li>
        <li>
          <Link to={`${match.url}/post2`}>Post2</Link>
        </li>
        <li>
          <Link to={`${match.url}/post3`}>Post3</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default function({ match }) {
  return (
    <div>
      <Route path={`${match.path}/:topicId`} component={Post} />
      <Route exact path={match.path} component={Posts} />
    </div>
  );
}
