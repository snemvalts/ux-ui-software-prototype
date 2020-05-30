import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {RootContainer} from "./Home";
import {Header, SubmitButton} from "../App";
import {useAppState} from "../hooks/useAppState";


const Recommendation = (props) => {
    const RecommendationElement = styled.div`
      padding: 8px 6px;
      display: flex;
      justify-content: space-between;
    `;

    return (
        <RecommendationElement>
            {props.children}
            <div>
            <span style={{display:'inline-block',marginRight: '34px', fontWeight: 'bold'}}>{props.quantity}x</span>
            <span>€{props.price}</span>
            <span style={{display:'inline-block',marginLeft: '16px', fontWeight: 'bold', color: '#FF0000'}}>-</span>
            </div>
        </RecommendationElement>
    )
}

const ImageContainer = styled.div`
  img {
    width: 50%;
  }
`;

const Recommendations = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 8px 8px;
  min-height: 100px;
`;

const Button = styled.button `
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;


const Checkout = () => {

    const itemStyle = {padding: '5px'}
    const [appstate]  = useAppState();

    if(appstate.uc === 1){
        return (
            <RootContainer>
                <Header/>
                <h2 style={{textAlign: 'center'}}>CHECKOUT</h2>
    
                
                <Recommendations>
                    <Recommendation price={4.8} quantity={3}>Tomatoes</Recommendation>
                    <Recommendation  price={1.5} quantity={1}>Cucumber</Recommendation>
                    <Recommendation  price={3.0} quantity={2}>Minced meat</Recommendation>
                </Recommendations>
                <h2 style={{textAlign: 'left'}}>Total: 9.3€</h2>
    
    
                <p>Please review the contents of your cart before ordering.</p>
                <h2 style={{textAlign: 'left'}}>Payment</h2>
    
                <ImageContainer>
                    <img src="/visa_maestro_paypal.png" alt=""/>
                    <img src="/eesti_pangad.png" alt=""/>
                </ImageContainer>
    
                <div style={{textAlign: 'center'}}>
                <Link to="/" style={{textDecoration: 'none'}}><SubmitButton>ORDER</SubmitButton></Link>
                </div>
                <br></br>
            </RootContainer>
        );
    } else {
        return (
            <RootContainer>
                <Header/>
                <h2 style={{textAlign: 'center'}}>CHECKOUT</h2>
    
                
                <Recommendations>
                    <Recommendation  price={1.5} quantity={1}>Beer</Recommendation>
                    <Recommendation  price={3.0} quantity={2}>Ice-cream</Recommendation>
                </Recommendations>
    
    
                <p>Please review the contents of your cart before ordering.</p>
                <h2 style={{textAlign: 'left'}}>Payment</h2>
    
                <ImageContainer>
                    <img src="/visa_maestro_paypal.png" alt=""/>
                    <img src="/eesti_pangad.png" alt=""/>
                </ImageContainer>
    
                <div style={{textAlign: 'center'}}>
                <Link to="/" style={{textDecoration: 'none'}}><SubmitButton>ORDER</SubmitButton></Link>
                </div>
                <br></br>
            </RootContainer>
        );
    }

  
}

export default Checkout;
