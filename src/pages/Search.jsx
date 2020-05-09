import React from "react";
import {Link} from "react-router-dom";
import {Recommendations, RootContainer, SearchBox} from "./Home";
import {Header} from "../App";

const Search = () => {

    const itemStyle = {padding: '5px'}
    const dropDownArrow = {margin: '2px', border: 'solid black', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '3px', transform: 'rotate(45deg)'}

    return (
        <RootContainer>
            <Header/>
            <SearchBox>
                <span>Tomatoes</span>
                <span>🔍</span>
            </SearchBox>
            <p>Filter by: <strong>Price</strong> <i style={dropDownArrow}></i></p>
            <Recommendations>
                <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                    <div style={itemStyle}>
                        <h4 style={{margin: 'auto', textAlign: 'center'}}>Campari Tomatoes</h4>
                        <p><strong>Price:</strong> 1.2€</p>
                        <p><strong>Vendor:</strong> Campart</p>
                        <p><strong>Origin:</strong> Italy</p>
                    </div>
                </Link>
                <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                    <div style={itemStyle}>
                        <h4 style={{margin: 'auto', textAlign: 'center'}}>Beefsteak Tomatoes, 2 Pack</h4>
                        <p><strong>Price:</strong> 1.5€</p>
                        <p><strong>Vendor:</strong> Beefsteak</p>
                        <p><strong>Origin:</strong> USA</p>
                    </div>
                </Link>
                <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                    <div style={itemStyle}>
                        <h4 style={{margin: 'auto', textAlign: 'center'}}>Cherto Gourmet Cherry</h4>
                        <p><strong>Price:</strong> 2.1€</p>
                        <p><strong>Vendor:</strong> Cherto</p>
                        <p><strong>Origin:</strong> France</p>
                    </div>
                </Link>
            </Recommendations>
        </RootContainer>
    );
}

export default Search;
