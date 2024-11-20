import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Route, A } from "@solidjs/router";

const Home = lazy(() => import("./pages/Home"));
const Notes = lazy(() => import("./pages/Notes"));
const NoMatch = lazy(() => import("./pages/NoMatch"));

import Layout from "./components/Layout";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/notes" component={Notes} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  );
};

export default App;
