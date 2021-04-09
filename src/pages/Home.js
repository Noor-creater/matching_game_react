import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import './Home.css';
import HomeHeader from '../components/HomeHeader.js';
import HomeBg from '../img/home_bg.png';
import boardHomepage from '../img/boardHomepage.svg';
import playImg from '../img/playGame-btn.png';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
`;

const HomeContainer = styled.div`
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    with: 100%;
    height: auto;    
`;

const Content = styled.div`
    position: absolute;
    font-family: 'Poppins', sans-serif;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 40%;
    padding: 0.5rem 1rem ;

    h3 {
        font-weight: 700;
        color: white;
        font-size: 21px;
        margin-bottom: 15px;
    }

    p {
        font-size: 15px;
        margin-top: 12px;
    }
`;

class Home extends Component {
    constructor(props){
        super(props);
    }
    goToForm = (e) =>{
        e.preventDefault();
        // console.log("Form!");
        this.props.history.push('/form');
    }

    render(){
    return (
        <div>
            <GlobalStyle/>
            <Background style={{ backgroundImage: `url(${HomeBg})` }}>
                <HomeContainer>
                    <HomeHeader/>
                    <Content>
                        <h3 >Contest Information</h3>
                        <p className="p1">We're giving a way total value up to $16,000 dollars prizes this month!</p>
                        <p className="p2">By winning matching game, you have chance to win worth $10,000 prize!</p>
                    </Content>
                    <img className="home-board" src={boardHomepage} alt="contest info board"/>
                    <img className="playBtn" onClick={this.goToForm} src={playImg} alt="Start Game"/>
                </HomeContainer>
                
            </Background>
        </div>
    )
}
}

export default withRouter(Home);