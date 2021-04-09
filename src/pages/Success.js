import React, {useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle.js';
import Modal1 from '../components/Modal1';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.js';
import WinBgImg from '../img/thankyouWinBg.png';
import './Success.css';


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

const Content = styled.div`
    position: absolute;
    top: 18%;
    font-family: 'Poppins', sans-serif;
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem ;

    h2 {
        font-weight: 700;
        color: white;
        font-size: 35px;
        color: #fff;
    }
`;

const Button = styled.button`
    min-width: 200px;
    border: none;
    color: #fff;
    background-color: #0bbf7d;
    padding: 6px 15px;
    text-align: center;
    font-size: 20px;
    margin-bottom: 200px;
`;


const Success =()=> {
    const [showModal1, setShowModal1] = useState(false)
    const openModal1 = () => {
        setShowModal1(prev => !prev)
    }
    return (
        <>
            <GlobalStyle/>
            <Background style={{backgroundImage: `url(${WinBgImg})`}}>
            <Header/>
            <Content>
                <h2>You Won!</h2>
            </Content>
            <div className="winContainer">
                    <div className="winContent">
                        <p>Congratulation! You have successfully won</p>
                        <span>$750</span>
                        <p>BuyMore Dollars Coupon</p>
                    </div>
                </div>
            <div className="modalBox">
                <Button onClick={openModal1}>Redeem My Prize</Button>
                <Modal1 showModal1={showModal1} setShowModal1={setShowModal1}/>
            </div>
            </Background>
        </>
    )

}

export default withRouter(Success);