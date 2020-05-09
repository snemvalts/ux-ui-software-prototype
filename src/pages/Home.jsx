import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

export const RootContainer = styled.div``;

const Home = () => {
    return (
        <RootContainer>
            <h2>Home</h2>
            <Link to="/search">Search</Link>
        </RootContainer>
    );
}

export default Home;
