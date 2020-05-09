import React from "react";
import {Link} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header, SubmitButton} from "../App";
import styled from 'styled-components';
import {useAppState} from "../hooks/useAppState";

const ProductInfoContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  border: 1px solid black;
`;

const SupplementaryInfoContainer = styled.div`
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid black;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const Product = () => {
    const [appstate] = useAppState();
    if (appstate.uc === 1) {
    return (
        <RootContainer>
            <Header/>
            <h2>Campari Tomatoes</h2>


            <ProductInfoContainer>
                <div>Campari Tomatoes, 0.5kg</div>
                <div>Vendor: Campari</div>
                <div>Origin: Italy</div>
                <div>Size: 500g</div>
            </ProductInfoContainer>

            <SupplementaryInfoContainer>
                <span>Nutritional facts</span>
                <span style={{fontWeight: 'bold'}}>+</span>
            </SupplementaryInfoContainer>

            <SupplementaryInfoContainer>
                <span>Product description</span>
                <span style={{fontWeight: 'bold'}}>+</span>
            </SupplementaryInfoContainer>

            <ImageContainer>
                <img src="/tomato.jpg" alt=""/>
            </ImageContainer>

            <Link to="/checkout" style={{textDecoration: 'none'}}><SubmitButton>Add to Cart</SubmitButton></Link>
        </RootContainer>
    );

    } else {
        return (
            <RootContainer>
                <Header/>
                <h2>Corona Beer</h2>


                <ProductInfoContainer>
                    <div>Corona beer, 0.3L</div>
                    <div>Vendor: Corona</div>
                    <div>Origin: Mexico</div>
                    <div>Size: 0.3 L</div>
                </ProductInfoContainer>

                <SupplementaryInfoContainer>
                    <span>Nutritional facts</span>
                    <span style={{fontWeight: 'bold'}}>+</span>
                </SupplementaryInfoContainer>

                <SupplementaryInfoContainer>
                    <span>Product description</span>
                    <span style={{fontWeight: 'bold'}}>+</span>
                </SupplementaryInfoContainer>

                <ImageContainer>
                    <img src="/corona.jpg" alt=""/>
                </ImageContainer>

                <Link to="/checkout" style={{textDecoration: 'none'}}><SubmitButton>Add to Cart</SubmitButton></Link>
            </RootContainer>
        );
    }
}

export default Product;
