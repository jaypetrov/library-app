import React from "react";
import "./App.css";
import { HomePage } from "./Layouts/HomePage/HomePage";
import { Footer } from "./Layouts/NavbarAndFooter/Footer";
import { Navbar } from "./Layouts/NavbarAndFooter/Navbar";
import { SearchBook } from "./Layouts/SearchBooksPage/components/SearchBook";
import { SearchBooksPage } from "./Layouts/SearchBooksPage/SearchBooksPage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/"  >
          <HomePage />
        </Route>
        <Route path="search">
          <SearchBooksPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
export default App;
