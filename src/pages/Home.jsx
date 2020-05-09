import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {Header} from "../App";
import {useAppState} from "../hooks/useAppState";

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
`;

const RecommendationsHeader = styled.h2`
  margin-top: 64px;
  
`;

export const Recommendations = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 8px 8px;
  min-height: 400px;
`;


const Recommendation = (props) => {
    const RecommendationElement = styled.div`
      padding: 8px 6px;
      display: flex;
      justify-content: space-between;
    `;

    return (
        <RecommendationElement>
            {props.children}
            <div>
                <span>€{props.price}</span>
                <span style={{display:'inline-block',marginLeft: '16px', fontWeight: 'bold'}}>+</span>
            </div>
        </RecommendationElement>
    )
}



const Home = () => {
    const [appstate] = useAppState();

    if (appstate.uc === 1) {
    return (
        <RootContainer>
            <Header/>
            <Link to="/search" style={{ textDecoration: 'none', color: 'black' }}>
                <SearchBox>
                    <span>Search</span>
                    <span>🔍</span>
                </SearchBox>
            </Link>
            <RecommendationsHeader>Recommendations</RecommendationsHeader>
            <Recommendations>
                <Recommendation price={1.6}>
                    <span>Pasta 0.5kg</span>

                </Recommendation>
                <Recommendation  price={1.5}>Bread 0.5kg</Recommendation>
                <Recommendation  price={1.53}>Cucumber</Recommendation>

            </Recommendations>
        </RootContainer>
    );
    } else {
        return (
            <RootContainer>
                <Header/>
                <Link to="/search" style={{ textDecoration: 'none', color: 'black' }}>
                    <SearchBox>
                        <span>Search</span>
                        <span>🔍</span>
                    </SearchBox>
                </Link>
                <RecommendationsHeader>Recommendations</RecommendationsHeader>
                <Recommendations>
                    <Recommendation price={1.2}>
                        <span>Beer 1 can</span>

                    </Recommendation>
                    <Recommendation price={1.3}>Ice cream</Recommendation>
                </Recommendations>
            </RootContainer>)
    }
}

export default Home;
