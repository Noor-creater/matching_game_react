
import React, {useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle.js';
import Modal2 from '../components/Modal2';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.js';
import BgImg from '../img/formbg.png';
import './Failure.css';


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
    font-family: 'Poppins', sans-serif;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 21%;
    padding: 0.5rem 1rem ;

    h2 {
        font-weight: 700;
        color: white;
        font-size: 25px;
        margin-bottom: 1.8rem;
        color: #fff;
    }

    p {
        font-size: 15px;
        color: #525252;
    }

    span {
        font-size: 28px;
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

const Failure =()=> {
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    
    return (
        <>
            <GlobalStyle/>
            <Background style={{backgroundImage: `url(${BgImg})`}}>
            <Header/>
                <Content>
                    <h2>You Lost!</h2>
                </Content>
                
                <div className="lostContainer">
                    <div className="lostContent">
                        <p>Time’s up! You lost. Try again.</p>
                        <span>$2</span>
                        <p>BuyMore Dollars Coupon</p>
                    </div>
                </div>

                <div className="modalBox">
                    <Button onClick={openModal}>Redeem My Prize</Button>
                    <Modal2 showModal={showModal} setShowModal={setShowModal}/>
                </div>

            </Background>
        </>
        
    )

}

export default withRouter(Failure);