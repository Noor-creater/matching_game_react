import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import {withRouter} from 'react-router-dom';
import './Rules.css';
import Header from '../components/Header.js';
import BgImg from '../img/formbg.png';
import boardLegal from '../img/boardLegal.svg';

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
    z-index: 10;
    top: 20%;
    padding: 0.5rem 1rem ;

    h3 {
        font-weight: 700;
        color: white;
        font-size: 21px;
        margin-bottom: 1.8rem;
        color: #fff;
    }

    h6 {
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        color: #525252;
    }

    p {
        font-size: 15px;
        color: #525252;
    }

    ol li {
        font-size: 15px;
        color: #525252;
        text-align: left;
        margin-bottom: 14px;
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

class TermsConditions extends Component {
    constructor(props){
        super(props);
    }
    backHome = (e) =>{
        e.preventDefault();
        console.log("Back Home!");
        this.props.history.push('/form');
    }


    render(){
    return (
        <>
        <GlobalStyle/>
        <Background style={{backgroundImage: `url(${BgImg})`}}>
            <Container>
                <Header/>
                <Content>
                    <div className="content1">
                        <h3>Terms and Conditions</h3>
                    </div>
                    <div className="content2">
                        <p><span>Last updated: January 28, 2021</span></p>
                        <ol>
                            <li>
                                Please read these terms and conditions carefully and by participating in this Contest all participants irrevocably agree to be bound by these terms and conditions, which will be solely interpreted by BuyMore Dollars.
                            </li>
                            <li>
                                The Match Game Contest is open to everyone except persons under the age of 16.
                            </li>
                            <li>
                                This Contest is organized by BuyMore Dollars and these are the terms and conditions of this Contest, which may be amended by BuyMore Dollars at any time during this Contest.
                            </li>
                            <li>
                                The Contest runs from 1 st April 2021 through 15 th April 2021. However, the Contest may be terminated or extended at any time at the sole discretion of the BuyMore Dollars.
                            </li>
                            <li>
                                By playing the game, you consent to your name being included in the final post naming the winners.
                            </li>
                            <li>
                                The decision of BuyMore Dollars will be final, and the company reserves the right to accept or reject any entry.
                            </li>
                        </ol>
                        <Button onClick={this.backHome}>Close</Button>
                    </div>
                    
                </Content>
                <img src={boardLegal} alt="policy board"/>
            </Container>
        </Background>
        </>
    )
}
}

export default withRouter(TermsConditions);