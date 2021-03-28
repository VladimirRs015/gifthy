// Dependencies
import React from "react";
import { Route, Switch } from "wouter";
import styled, { ThemeProvider } from "styled-components";
import theme from "themes/index";
import GloabalStyles from "themes/GlobalStyles";
// Comps
import SearchForm from "components/SearchForm/SearchForm";
import Navbar from "components/Navbar/index";
import WrapperStyled from "components/styled/WrapperStyled";
import GifsContext from "contexts/gifsContext";
import AppContext from "contexts/AppContext";
import AuthContextProvider from "contexts/authContext";
// Pages
import HomePage from "pages/Home/index";
import SelectedGifPage from "pages/SelectedGif/index";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register/index";
import NotFound404 from "pages/NotFound404/index";
import GifsSearcher from "pages/GifSearcher/index";

const AppHeader = styled.header``;

function App() {
  // const [themeMode, setThemeMode] = useState("dark")
  return (
    <AppContext>
      <GifsContext keyword={"dogs"}>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <GloabalStyles />
            <div className="App-container">
              <AppHeader>
                <WrapperStyled>
                  <Navbar />
                  <SearchForm />
                </WrapperStyled>
              </AppHeader>

              <WrapperStyled>
                <Switch>
                  <Route path="/" component={HomePage} />
                  <Route path="/gifs:name" component={GifsSearcher} />
                  <Route path="/gifs/single/:id" component={SelectedGifPage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route component={NotFound404} />
                </Switch>
              </WrapperStyled>
            </div>
          </ThemeProvider>
        </AuthContextProvider>
      </GifsContext>
    </AppContext>
  );
}

export default App;
