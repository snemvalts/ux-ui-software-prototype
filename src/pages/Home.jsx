import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

export const RootContainer = styled.div`
  padding: 16px;
`;

export const SearchBox = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Home = () => {
    return (
        <RootContainer>
            <Link to="/search" style={{ textDecoration: 'none', color: 'black' }}>
                <SearchBox>
                    <span>Search</span>
                    <span>🔍</span>
                </SearchBox>
            </Link>
        </RootContainer>
    );
}

export default Home;
