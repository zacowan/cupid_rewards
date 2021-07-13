import React from "react";
import { Provider as BumbagProvider, PageWithHeader, TopNav } from "bumbag";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavButton from "./components/NavButton";

// Pages
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import NoMatchPage from "./pages/404";

const App: React.FC = () => {
  return (
    <BumbagProvider>
      <div style={{ height: "100%" }}>
        <Router>
          <PageWithHeader
            header={
              <TopNav>
                <TopNav.Section marginLeft="major-2">
                  <TopNav.Item fontWeight="bold" href="/">
                    Cupid Rewards
                  </TopNav.Item>
                </TopNav.Section>
                <TopNav.Section marginRight="major-2">
                  <TopNav.Item>
                    <NavButton to="/login" label="Login" />
                  </TopNav.Item>
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
              <Route exact path="/">
                <HomePage />
              </Route>
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
