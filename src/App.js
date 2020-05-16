import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import styled from "styled-components";
import {useAppState} from "./hooks/useAppState";
import Login from "./pages/Login";

export const MobileContainer = styled.div`
  padding: 8px;
  margin: 20px auto;
  width: 320px;
  height: 740px;
  overflow-y: auto;
  border-radius: 16px;
  border: 3px solid #434343;
  position: relative;
`;

export const UCSwitchContainer = styled.div`
  width: 320px;
  margin: 20px auto 0;
  text-align: center;
`;

export const Button = styled.div`
  padding: 8px 12px;
  text-transform: uppercase;
  background: #ff9b61;
  color: white;
  border-radius: 4px;
`

const HeaderContainer = styled.div`
  margin: 16px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled.div`
  padding: 8px 12px;
  text-transform: uppercase;
  background: #57ff52;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 4px;
`;

const UCSwitch = () => {
    const [appstate, setAppState] = useAppState();
    const history = useHistory();
    const setUC = (uc) => {
        setAppState({ uc });
        history.push('/');
    }
    return (
        <UCSwitchContainer>
            <div>Click on User scenario to switch to different User scenario:</div>
            <div onClick={() => setUC(1)} style={{cursor: 'pointer', fontWeight: appstate.uc === 1 ? 'bold' : 'normal'}}>User scenario 1 (Elderly)</div>
            <div onClick={() => setUC(2)} style={{cursor: 'pointer',  fontWeight: appstate.uc === 2 ? 'bold' : 'normal'}}>User scenario 2 (Middle-aged)</div>
        </UCSwitchContainer>
    )
}
export const Header = () =>
    (
    <HeaderContainer>
      <Link to="/login" style={{textDecoration: 'none'}}><Button>Login</Button></Link>
      <Link to="/checkout" style={{fontSize: '24px', textDecoration: 'none'}}><span>🛒</span></Link>
    </HeaderContainer>
    );

export default function App() {
  return (
      <Router basename="/ux-ui-software-prototype/">
        <UCSwitch/>
        <MobileContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
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
