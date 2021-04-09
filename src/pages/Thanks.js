
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle.js';
import Header from '../components/Header.js';
import WinBgImg from '../img/thankyouWinBg.png';
import thanks from '../img/golden-box.svg';
import './Thanks.css';



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

const Container = styled.div`
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
    justify-content: center;
    z-index: 10;
    top: 68%;
    padding: 0.5rem 1rem ;

    h3 {
        font-weight: 700;
        color: white;
        font-size: 21px;
        margin-bottom: 1.8rem;
        color: #333;
    }

    p {
        font-size: 15px;
        color: #525252;
    }
`;

const Button = styled.div`
    min-width: 200px;
    border: none;
    color: #fff;
    background-color: #0bbf7d;
    padding: 6px 15px;
    text-align: center;
    font-size: 20px;
`;

class Thanks extends Component {
    constructor(props){
        super(props);
    }
    backHome = (e) =>{
        e.preventDefault();
        console.log("Back Home!");
        this.props.history.push('/');
    }


    render(){
    return (
        <>
        <GlobalStyle/>
        <Background style={{backgroundImage: `url(${WinBgImg})`}}>
            <Container>
                <Header/>
                <Content>
                    <h3>Thanks for your submission!</h3>
                    <p>Your <span>BuyMore Dollars</span> will be added to your account within 6 to 8 weeks</p>
                    <button id="backHome" onClick={this.backHome}>Back Home</button>
                </Content>
                <img className="thanksBoard" src={thanks} alt="thank you for submissioon board"/>
            </Container>
        </Background>
        </>
        // <div class="thankyouBg">
        //     <Header/>
        //     <div className="thanksContainer">
        //         <div className="thanksContent">
        //             <h2>Thanks for your submission!</h2>
        //             <p>Your <span>BuyMore Dollars</span> will be added to your account within 6 to 8 weeks</p>
        //             <button id="backHome" onClick={this.backHome}>Back Home</button>
        //         </div>
        //         <img className="thanksBoard" src={thanks} alt="game instruction board"/>
        //     </div>

        // </div>
    )
}
}

export default withRouter(Thanks);