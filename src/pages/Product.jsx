import React from "react";
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h2>Product</h2>
            <Link to="/checkout">Checkout</Link>
        </div>
    );
}

export default Product;
