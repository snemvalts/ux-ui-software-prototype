import React from "react";
import {Link} from "react-router-dom";
import {RootContainer} from "./Home";
import {Header} from "../App";

const Search = () => {
    return (
        <RootContainer>
            <Header/>
            <h2>Search</h2>
            <Link to="/product">Product</Link>
        </RootContainer>
    );
}

export default Search;
