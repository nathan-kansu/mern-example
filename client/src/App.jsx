import React, { useReducer, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";
import PrivateRoute from "./components/PrivateRoute";
import Categories from "./contexts/Categories";
import LoggedIn from "./contexts/LoggedIn";
import categoriesReducer from "./reducers/categories";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [state, dispatch] = useReducer(categoriesReducer, { categories: [] });
  const loggedInState = { isLoggedIn, setIsLoggedIn };
  const categoriesState = { state, dispatch };

  return (
    <LoggedIn.Provider value={loggedInState}>
      <Categories.Provider value={categoriesState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Container>
              <Header />
              <Main>
                <Switch>
                  <PrivateRoute component={Home} exact path="/" />
                  <Route component={Login} path="/login" />
                </Switch>
              </Main>
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </Categories.Provider>
    </LoggedIn.Provider>
  );
};

export default App;
