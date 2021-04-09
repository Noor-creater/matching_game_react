import React, {useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyle.js';
import Modal2 from './Modal2.js';
import Header from '../components/Header.js';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`;

const Button = styled.button`
    min-width: 250px;
    border: none;
    color: #fff;
    background-color: #0bbf7d;
    padding:0.8rem 1.5rem;
    text-align: center;
    font-size: 1.5rem;
`;

const ModalBtn =() => {
    
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return(
        <div>
            <Container>
                <Header/>
                <Button onClick={openModal}>Redeem My Prize</Button>
                <Modal2 showModal={showModal} setShowModal={setShowModal}/>
                <GlobalStyle/>
            </Container>
            
        </div>
    )

}

