import React from "react";
import {Link} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header} from "../App";

const Checkout = () => {
    return (
        <RootContainer>
            <Header/>
            <h2>Checkout</h2>
            <Link to="/">Home</Link>
        </RootContainer>
    );
}

export default Checkout;
