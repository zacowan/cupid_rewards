import React, { useContext } from "react";
import { PageWithHeader, TopNav, Button } from "bumbag";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./components/AuthContext";

// Pages
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import CRPPage from "./pages/CreateRewardsPage";
import NoMatchPage from "./pages/404";

const Routing: React.FC = () => {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    return null;
  }

  return (
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
              {user === null ? (
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
          <ProtectedRoute path="/create-rewards-page">
            <CRPPage />
          </ProtectedRoute>
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
  );
};

export default Routing;
