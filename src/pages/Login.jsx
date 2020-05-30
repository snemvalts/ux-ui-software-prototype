import React from "react";
import {Link, useHistory} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header, SubmitButton} from "../App";
import styled from 'styled-components';
import {useAppState} from "../hooks/useAppState";


const TextBox = styled.input`
    border:1px solid black;
    padding: 4px 8px;
    font-size: 18px;
    border-radius: 4px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin: 16px 0;
    &:focus {
      outline: 0;
    }
`
const Login = () => {
    const [appState, setAppState] = useAppState();
    const history = useHistory();

    const loginClicked = () => {
        setAppState({...appState, loggedInUser: appState.uc === 1 ? 'Liina Liinet' : 'Mattias Mattson' })
        history.push('/')
    }
  return (
    <RootContainer>
      <Header/>
      <h2>Login</h2>
      <label htmlFor={'phone'}>Enter your phone number:</label>
      <TextBox name={'phone'} type={'phonenumber'} placeholder={'+372 5343 231 123'}/>
      <TextBox name={'password'} type={'password'}/>
      <span style={{textDecoration:'none', cursor: 'pointer'}} onClick={() => loginClicked()}><SubmitButton >Sign in</SubmitButton></span>
    </RootContainer>
  );
}

export default Login;
