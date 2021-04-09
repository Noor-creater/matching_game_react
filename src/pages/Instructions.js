import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import {withRouter, Link} from 'react-router-dom';
import './Rules.css';
import HomeHeader from '../components/HomeHeader.js';
import BgImg from '../img/formbg.png';
import Board from '../img/instruction.svg';


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
    top: 43%;
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

    span {
        font-weight: 700;
    }
`;


const Button = styled.div`
    max-width: 150px;
    border: none;
    color: #fff;
    background-color: #0bbf7d;
    padding: 6px 15px;
    text-align: center;
    font-size: 20px;

    a:link {
        color: #fff;
    }

    a:visited {
        color: #fff;
    }
`;



class Instructions extends Component {
    constructor(props){
        super(props);
    }
    goToThanks = (e) =>{
        e.preventDefault();
        // console.log("Thanks!");
        this.props.history.push({
            pathname:'/thanks',
            state:{
                salutation:this.props.location.state.salutation,
                first_name:this.props.location.state.first_name,
                last_name:this.props.location.state.last_name
            }
            });
    }


    render(){
    return (
        <>
        <GlobalStyle/>
        <Background style={{backgroundImage: `url(${BgImg})`}}>
            <Container>
                <HomeHeader/>
                <Content>
                    <div className="content1">
                        <h3>Game Instructions</h3>
                    </div>
                    <div className="content2>">
                        {/* <p>Welcome to the Matching Game! The game consists of <span>10 tiles</span>, make five matches by selecting two same images within <span>20 seconds</span>.</p> */}
                        <p>Hi! Welcome to the Matching Game. The game consists of 
                        <span> 10 tiles</span>, make five matches by selecting two same images within <span>20 seconds.</span></p>
                    </div>
                    <Button>
                        <Link to="/game">I'm Ready!</Link>
                    </Button>
                </Content>
                <img src={Board} alt="board"/>
            </Container>
        </Background>
        </>
    )
}
}

export default withRouter(Instructions);