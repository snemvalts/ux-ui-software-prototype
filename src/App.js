import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import styled from "styled-components";

export const MobileContainer = styled.div`
  padding: 8px;
  margin: 50px auto;
  width: 320px;
  height: 740px;
  overflow-y: auto;
  border-radius: 16px;
  border: 3px solid #434343;
  position: relative;
`;

export default function App() {
  return (
      <Router>
        <MobileContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </MobileContainer>
      </Router>
  );
}
