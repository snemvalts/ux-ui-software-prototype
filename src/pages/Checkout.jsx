import React, {useEffect, useState} from "react";
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
            <span onClick={() => props.minusClicked()} style={{display:'inline-block', cursor:'pointer', marginLeft: '16px', fontWeight: 'bold', color: '#FF0000'}}>-</span>
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
    const [appstate,setAppstate]  = useAppState();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (appstate && appstate.uc) {
            if (appstate.uc === 1) {
                setCartItems([
                    {price: 4.8, quantity: 3, name: 'Tomatoes'},
                    {price: 1.5, quantity: 1, name: 'Cucumber'},
                    {price: 3.0, quantity: 2, name: 'Minced meat'},
                ])
            } else {
                setCartItems([
                    {price: 2.3, quantity: 1, name: 'Beer'},
                    {price: 1.5, quantity: 2, name: 'Ice cream'},
                ])
            }
        }
    }, [appstate]);

    useEffect(() => {
        setAppstate({...appstate, cart: appstate.uc === 1 ? 6:3})
    }, []);

    function handleClick(e) {
        alert("Your order has been processed!")
    }

    const handleMinusClick = (idx) => {
        if (cartItems[idx].quantity > 0) {
            const newCartItems = [...cartItems];
            newCartItems[idx].quantity = newCartItems[idx].quantity - 1;

            console.log(newCartItems);
            setAppstate({...appstate, cart: appstate.cart - 1});
            setCartItems(newCartItems)
        }
    }

    if(appstate.uc === 1){
        return (
            <RootContainer>
                <Header/>
                <h2 style={{textAlign: 'center'}}>CHECKOUT</h2>
    
                
                <Recommendations>
                    {
                        (cartItems.map((cartItem, idx) => (
                            <Recommendation key={cartItem.name}
                                            price={cartItem.price}
                                            quantity={cartItem.quantity} minusClicked={() => alert('Feature not yet implemented')}>{cartItem.name}</Recommendation>
                        )))
                    }
                </Recommendations>
                <h2 style={{textAlign: 'left'}}>Total: 9.3€</h2>
    
    
                <p>Please review the contents of your cart before ordering.</p>
                <h2 style={{textAlign: 'left'}}>Payment</h2>
    
                <ImageContainer>
                    <img src="/visa_maestro_paypal.png" alt=""/>
                    <img src="/eesti_pangad.png" alt=""/>
                </ImageContainer>

                <h2 style={{textAlign: 'left'}}>Delivery</h2>
                <div>
                <input type="radio" id="6hrs" name="vehicle1" value="Bike"></input>
                <label htmlFor="6hrs">6 hours delivery</label><br></br>
                <input type="radio" id="24hrs" name="vehicle1" value="Bike"></input>
                <label htmlFor="24hrs">24 hours delivery</label><br></br>
                </div>
    
                <div style={{textAlign: 'center'}}>
                <Link to="/" style={{textDecoration: 'none'}}><SubmitButton style={{marginTop: '20px'}} onClick={handleClick}>ORDER</SubmitButton></Link>
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
                    {
                        (cartItems.map((cartItem, idx ) => (
                            <Recommendation key={cartItem.name} price={cartItem.price}
                                            quantity={cartItem.quantity}
                                            minusClicked={() => alert('Feature not yet implemented')}>{cartItem.name}</Recommendation>
                        )))
                    }
                </Recommendations>
    
    
                <p>Please review the contents of your cart before ordering.</p>
                <h2 style={{textAlign: 'left'}}>Payment</h2>
    
                <ImageContainer>
                    <img src="/visa_maestro_paypal.png" alt=""/>
                    <img src="/eesti_pangad.png" alt=""/>
                </ImageContainer>

                <h2 style={{textAlign: 'left'}}>Delivery</h2>
                <div>
                <input type="radio" id="6hrs" name="vehicle1" value="Bike"></input>
                <label htmlFor="6hrs">6 hours delivery</label><br></br>
                <input type="radio" id="24hrs" name="vehicle1" value="Bike"></input>
                <label htmlFor="24hrs">24 hours delivery</label><br></br>
                </div>
    
                <div style={{textAlign: 'center'}}>
                <Link to="/" style={{textDecoration: 'none', marginTop: '100px'}}><SubmitButton style={{marginTop: '20px'}} onClick={handleClick}>ORDER</SubmitButton></Link>
                </div>
                <br></br>
            </RootContainer>
        );
    }

  
}

export default Checkout;
