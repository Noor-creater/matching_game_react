import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: linear-gradient(90deg, rgba(211,216,228,1) 0%, rgba(238,236,243,1) 50%, rgba(211,216,228,1) 100%);
    border; 2px solid #fff;
    color: #525252;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
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
        font-size: 21px;
        font-weight: 700;
    }
`;

const AnswerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


const Button = styled.button`
    border: none;
    color: #fff;
    background-color: #0bbf7d;
    text-align: center;
    font-size: 20px;
    margin: 16px;

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


export const Modal1 = ({showModal1, setShowModal1}) => {
    return(
        <>
        {showModal1 ? (
            <Background>
                <ModalWrapper showModal1={showModal1}>
                    <ModalContent>
                        <h3>One More Step to Your Prize!</h3>
                        <p>Please answer the following question</p>
                        <h3>14 + 7 = ?</h3>

                        <AnswerContainer>
                            <Button className="btn">
                                <Link to="/thanks">21</Link>
                            </Button>
                            <Button className="btn">20</Button>
                        </AnswerContainer>

                        {/* <button id="backHome"><Link to="/">Back Home</Link></button> */}
                    </ModalContent>
                    <CloseModalButton
                        aria-lable="Close modal"
                        onClick={()=> setShowModal1(prev => !prev)}
                    />
                </ModalWrapper>
            </Background>
        ): null}
        </>
    );
    
}

export default Modal1;