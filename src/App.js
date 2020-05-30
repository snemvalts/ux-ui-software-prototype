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
`;

export const BackButton = styled.div`
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  font-size: 24px;
  
  &.disabled {
    background: red;
    opacity: 0.8;
  }
`

const HeaderContainer = styled.div`
  margin: 16px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartCounter = styled.span`
    position: absolute;
    border: 1px solid black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    font-size: 12px;
    text-align: center;
    background: orange;
    right: -6px;
    bottom: -8px;
`;

export const SubmitButton = styled.button`
  padding: 8px 12px;
  text-transform: uppercase;
  background: #57ff52;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 4px;
    border: none;
  width:100%;
  height:34px;
  cursor:pointer;
`;

export const CancelButton = styled.button`
  padding: 8px 12px;
  text-transform: uppercase;
  background: red;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 4px;
  margin-top:8px;
  border: none;
  width:100%;
  height:34px;
    cursor:pointer;

`;

const UCSwitch = () => {
    const [appstate, setAppState] = useAppState();
    const history = useHistory();
    const setUC = (uc) => {
        setAppState({ uc, cart: 0});
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
export const Header = () => {
    const [appstate, setAppState] = useAppState();
    const history = useHistory();

    return (
        <HeaderContainer>
            <BackButton onClick={() => history.goBack()}>⬅️</BackButton>
            { appstate.loggedInUser ?
                (<span style={{fontWeight: 'bold'}} onClick={() => {alert("Logged out"); setAppState({...appstate, loggedInUser:null})}}>{appstate.loggedInUser}</span>) :
                (<Link to="/login" style={{textDecoration: 'none'}}><Button>Login</Button></Link>)
            }
            <Link to="/checkout" style={{
                fontSize: '24px',
                textDecoration: 'none',
                position: 'relative'
            }}><span> <CartCounter>{appstate.cart}</CartCounter>🛒</span></Link>
        </HeaderContainer>
    )
};

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
