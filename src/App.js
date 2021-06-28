import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
const Home = React.lazy(() => import("./components/Home"));
const Settings = React.lazy(() => import("./components/Settings"));
const Topics = React.lazy(() => import("./components/Topics"));
const Tweets = React.lazy(() => import("./components/Tweets"));
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/tweets">Tweets</Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/tweets">
              <Tweets />
            </Route>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
