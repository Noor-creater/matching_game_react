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
    top: 21%;
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

class Rules extends Component {
    constructor(props){
        super(props)
        this.state = {
        salutation: '',
        first_name: '',
        last_name: ''
        }
    }
    goToInst = (e) =>{
        e.preventDefault();
        // console.log("Instruction");
        this.props.history.push({
            pathname:'/instructions',
            });
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
                            <h3>Game Rules</h3>
                        </div>
                        <div className="content2">
                            <p>Thanks {this.props.location.state.first_name} for your registration!</p>
                            <h6>Prizes</h6>
                            <p className="p1">1 prize of 10,000 BuyMore Dollars</p>
                            <p className="p1">5 prizes of 750 BuyMore Dollars</p>
                            <p className="p1">10 prizes of 100 BuyMore Dollars</p>
                            <p className="p2">100 prizes of 20 BuyMore Dollars</p>

                            <p>---------------------------------</p>
                            <h6>How to Play</h6>
                            <p>The game consists of 10 tiles, make five matches by selecting same two images within 20 seconds.</p>
                            <p>---------------------------------</p>
                            <h6>Rules and Regulations</h6>
                            <ol>
                                <li>Play the Matching Game. If you win, answer a skill testing question, then enjoy your prize.</li>
                                <li>If you loss, you have chance to get a coupon</li>
                                <li>This contest will be online for 3 weeks. From April 1, 2021 to April 15, 2021. During this time, you will be able to play after 48 hours if you have won; you will be able to play after 24 hours if you lose.</li>
                            </ol>
                            <Button onClick={this.goToInst}>Next</Button>
                        </div>  
                    </Content>
                    <img className="rules-board" src={boardLegal} alt="game rules board"/>
                </Container>
                
            </Background>
        </>
    )
}
}

export default withRouter(Rules);