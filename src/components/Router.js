import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "../components/Navigation";
import Profile from "../routes/Profile";
import { GlobalStyle } from "../GlobalStyles";
import Introduce from "../routes/Introduce";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      <GlobalStyle />
      {isLoggedIn ? <Navigation userObj={userObj} /> : <Navigation />}
      <Switch>
        <Route exact path="/">
          <Home userObj={userObj} />
        </Route>
        <Route exact path="/introduce">
          <Introduce />
        </Route>
        {isLoggedIn ? (
          <>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
