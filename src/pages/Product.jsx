import React from "react";
import {Link} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header} from "../App";

const Product = () => {
    return (
        <RootContainer>
            <Header/>
            <h2>Product</h2>
            <Link to="/checkout">Checkout</Link>
        </RootContainer>
    );
}

export default Product;
