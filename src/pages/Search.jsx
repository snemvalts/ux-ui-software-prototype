import React from "react";
import {Link} from "react-router-dom";
import {RootContainer, SearchBox} from "./Home";
import {Header} from "../App";

const Search = () => {

    const itemStyle = {padding: '5px'}

    return (
        <RootContainer>
            <Header/>
            <SearchBox>
                <span>Tomatoes</span>
                <span>🔍</span>
            </SearchBox>
            <h4>Filter by: Price</h4>
            <div style={{border: '1px solid black'}}>
                <Link to="/product">
                    <div style={itemStyle}>
                        <h4 style={{margin: 'auto', textAlign: 'center'}}>Campari Tomatoes</h4>
                        <p><strong>Price:</strong> 1.2€</p>
                        <p><strong>Vendor:</strong> Campart</p>
                        <p><strong>Origin:</strong> Italy</p>
                    </div>
                </Link>
                <Link to="/product">
                    <div style={itemStyle}>
                        <h4 style={{margin: 'auto', textAlign: 'center'}}>Beefsteak Tomatoes, 2 Pack</h4>
                        <p><strong>Price:</strong> 1.5€</p>
                        <p><strong>Vendor:</strong> Beefsteak</p>
                        <p><strong>Origin:</strong> USA</p>
                    </div>
                </Link>
                <Link to="/product">
                    <div style={itemStyle}>
                        <h4 style={{margin: 'auto', textAlign: 'center'}}>Cherto Gourmet Cherry</h4>
                        <p><strong>Price:</strong> 2.1€</p>
                        <p><strong>Vendor:</strong> Cherto</p>
                        <p><strong>Origin:</strong> France</p>
                    </div>
                </Link>
            </div>
        </RootContainer>
    );
}

export default Search;
