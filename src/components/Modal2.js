import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: linear-gradient(90deg, rgba(211,216,228,1) 0%, rgba(238,236,243,1) 50%, rgba(211,216,228,1) 100%);
    border: 2px solid #fff;
    color: #525252;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #525252;
    padding: 1rem;

    p {
        font-size: 16px;
    }

    h3 {
        font-weight: 700;
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
    margin-top: 16px;

    a:link {
        color: #fff;
    }
    a:visited {
        color: #fff;
    }
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 220px;
    right: 30px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 11;
`;


export const Modal2 = ({showModal, setShowModal}) => {
    return(
        <>
        {showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <h3>Thanks for your submission!</h3>
                        <p>Your <span>BuyMore Dollars</span> will be added to your account within 6 to 8 weeks</p>

                        <Button><Link to="/">Back Home</Link></Button>
                    </ModalContent>
                    <CloseModalButton
                        aria-lable="Close modal"
                        onClick={()=> setShowModal(prev => !prev)}
                    />
                </ModalWrapper>
            </Background>
        ): null}
        </>
    );
    
}

export default Modal2;