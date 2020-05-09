import React from "react";
import {Link} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header} from "../App";
import styled from 'styled-components';

const ProductInfoContainer = styled.div`
  bord
`;

const Product = () => {
    return (
        <RootContainer>
            <Header/>
            <h2>Campari Tomatoes</h2>


            <Link to="/checkout">Checkout</Link>
        </RootContainer>
    );
}

export default Product;
