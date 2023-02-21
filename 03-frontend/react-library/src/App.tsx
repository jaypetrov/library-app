import React from "react";
import "./App.css";
import { HomePage } from "./Layouts/HomePage/HomePage";
import { Footer } from "./Layouts/NavbarAndFooter/Footer";
import { Navbar } from "./Layouts/NavbarAndFooter/Navbar";
import { SearchBook } from "./Layouts/SearchBooksPage/components/SearchBook";
import { SearchBooksPage } from "./Layouts/SearchBooksPage/SearchBooksPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { BookCheckoutPage } from "./Layouts/BookCheckoutPage/BookCheckoutPage";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchBooksPage />
          </Route>
          <Route path="/checkout/:bookId">
            <BookCheckoutPage/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
export default App;
