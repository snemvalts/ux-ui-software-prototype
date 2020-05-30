import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Recommendations, RootContainer, SearchBox} from "./Home";
import {Header, SubmitButton} from "../App";
import {useAppState} from "../hooks/useAppState";
import styled from "styled-components";

const Search = () => {

    const [appstate, setAppState] = useAppState();
    const [showFilterBox, setShowFilterBox] = useState(false);
    const itemStyle = {padding: '5px'}
    const dropDownArrow = {
        margin: '2px',
        border: 'solid black',
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '3px',
        transform: 'rotate(45deg)'
    }

    if (appstate.uc === 1) {
        return (
            <RootContainer>
                <Header/>
                <SearchBox onClick={() => alert("Searchbox functionality not implemented")}>
                    <span>Tomatoes</span>
                    <span>🔍</span>
                </SearchBox>
                <p onClick={() => setShowFilterBox(!showFilterBox)}>Filter by: <strong>Price, Vendor, Origin</strong> <i
                    style={dropDownArrow}></i></p>
                {showFilterBox && <div>
                    <form style={{marginBottom: '10px'}}>
                        <label>
                            <input type='checkbox' defaultChecked='true'/>
                            Price
                        </label>
                        <label>
                            <input type='checkbox' defaultChecked='true'/>
                            Vendor
                        </label>
                        <label>
                            <input type='checkbox' defaultChecked='true'/>
                            Origin
                        </label>
                    </form>
                </div>}
                <Recommendations>
                    <SubmitButton style={{padding: '8px 8px', position: 'absolute', fontSize: '10px', top: '235px', left: '200px', width:"inherit"}}
                                  onClick={() => setAppState({...appstate, cart: appstate.cart + 1})}>Add to
                        Cart</SubmitButton>
                    <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                        <div style={itemStyle}>
                            <h4 style={{margin: 'auto', textAlign: 'center'}}>Campari Tomatoes</h4>
                            <p><strong>Price:</strong> 1.2€</p>
                            <p><strong>Vendor:</strong> Campart</p>
                            <p><strong>Origin:</strong> Italy</p>
                        </div>
                    </Link>
                    <SubmitButton style={{padding: '8px 8px', position: 'absolute', fontSize: '10px', top: '380px', left: '200px', width:"inherit"}}
                                  onClick={() => setAppState({...appstate, cart: appstate.cart + 1})}>Add to
                        Cart</SubmitButton>
                    <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                        <div style={itemStyle}>
                            <h4 style={{margin: 'auto', textAlign: 'center'}}>Beefsteak Tomatoes, 2 Pack</h4>
                            <p><strong>Price:</strong> 1.5€</p>
                            <p><strong>Vendor:</strong> Beefsteak</p>
                            <p><strong>Origin:</strong> USA</p>
                        </div>
                    </Link>
                </Recommendations>
            </RootContainer>);
    } else {
        return (
            <RootContainer>
                <Header/>
                <SearchBox>
                    <span>Beer</span>
                    <span>🔍</span>
                </SearchBox>
                <p onClick={() => setShowFilterBox(!showFilterBox)}>Filter by: <strong>Price, Vendor, Origin</strong> <i
                    style={dropDownArrow}></i></p>
                {showFilterBox && <div>
                    <form style={{marginBottom: '10px'}}>
                        <label>
                            <input type='checkbox' defaultChecked='true'/>
                            Price
                        </label>
                        <label>
                            <input type='checkbox' defaultChecked='true'/>
                            Vendor
                        </label>
                        <label>
                            <input type='checkbox' defaultChecked='true'/>
                            Origin
                        </label>
                    </form>
                </div>}
                <Recommendations>
                    <SubmitButton style={{padding: '8px 8px', position: 'absolute', fontSize: '10px', top: '235px', left: '200px'}}
                                  onClick={() => setAppState({...appstate, cart: appstate.cart + 1})}>Add to
                        Cart</SubmitButton>
                    <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                        <div style={itemStyle}>
                            <h4 style={{margin: 'auto', textAlign: 'center'}}>Corona Beer</h4>
                            <p><strong>Price:</strong> 1.2€</p>
                            <p><strong>Vendor:</strong> Corona</p>
                            <p><strong>Origin:</strong> Mexico</p>
                        </div>
                    </Link>
                    <SubmitButton style={{padding: '8px 8px', position: 'absolute', fontSize: '10px', top: '380px', left: '200px'}}
                                  onClick={() => setAppState({...appstate, cart: appstate.cart + 1})}>Add to
                        Cart</SubmitButton>
                    <Link to="/product" style={{textDecoration: 'none', color: 'black'}}>
                        <div style={itemStyle}>
                            <h4 style={{margin: 'auto', textAlign: 'center'}}>A.le Coq Õlu</h4>
                            <p><strong>Price:</strong> 1€</p>
                            <p><strong>Vendor:</strong> A.le Coq</p>
                            <p><strong>Origin:</strong> Estonia</p>
                        </div>
                    </Link>
                </Recommendations>
            </RootContainer>
        );
    }
}

export default Search;
