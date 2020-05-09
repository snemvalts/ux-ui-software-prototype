import React from "react";
import {Link} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header, SubmitButton} from "../App";
import styled from 'styled-components';


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
  return (
    <RootContainer>
      <Header/>
      <h2>Login</h2>
      <label htmlFor={'phone'}>Enter your phone number:</label>
      <TextBox name={'phone'} type={'phonenumber'} placeholder={'+372 5343 231 123'}/>
      <Link style={{textDecoration:'none'}} to='/'><SubmitButton >Sign in</SubmitButton></Link>
    </RootContainer>
  );
}

export default Login;
