import React from "react";
import {
  Provider as BumbagProvider,
  PageWithHeader,
  TopNav,
  Button,
} from "bumbag";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "firebase/app";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import NoMatchPage from "./pages/404";

const App: React.FC = () => {
  const auth = firebase.auth();

  return (
    <BumbagProvider>
      <div style={{ height: "100%" }}>
        <Router>
          <PageWithHeader
            header={
              <TopNav>
                <TopNav.Section marginLeft="major-2">
                  <TopNav.Item>
                    {(navProps) => (
                      <Link {...navProps} to="/">
                        Cupid Rewards
                      </Link>
                    )}
                  </TopNav.Item>
                </TopNav.Section>
                <TopNav.Section marginRight="major-2">
                  {auth.currentUser === null ? (
                    <React.Fragment>
                      <TopNav.Item>
                        <Button palette="primary" variant="ghost">
                          {(buttonProps) => (
                            <Link {...buttonProps} to="/login">
                              Login
                            </Link>
                          )}
                        </Button>
                      </TopNav.Item>
                      <TopNav.Item>
                        <Button palette="primary">
                          {(buttonProps) => (
                            <Link {...buttonProps} to="/signup">
                              Sign Up
                            </Link>
                          )}
                        </Button>
                      </TopNav.Item>
                    </React.Fragment>
                  ) : (
                    <TopNav.Item>
                      <Button palette="primary" variant="ghost">
                        {(buttonProps) => (
                          <Link {...buttonProps} to="/account">
                            Account
                          </Link>
                        )}
                      </Button>
                    </TopNav.Item>
                  )}
                </TopNav.Section>
              </TopNav>
            }
          >
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
              <ProtectedRoute exact path="/">
                <HomePage />
              </ProtectedRoute>
              <Route path="*">
                <NoMatchPage />
              </Route>
            </Switch>
          </PageWithHeader>
        </Router>
      </div>
    </BumbagProvider>
  );
};

export default App;
