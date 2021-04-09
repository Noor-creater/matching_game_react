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
        color: #525252;
    }

    p {
        font-size: 15px;
        color: #525252;
        text-align: left;
    }

    span {
        font-size: 13px;
        font-style: underlined;
        color: #525252;
        margin-bottom: 12px;
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

class PrivacyPolicy extends Component {
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
                        <h3>Privacy Policy</h3>
                    </div>
                    <div className="content2">
                        <span>Last updated: January 28, 2021</span>
                        <p>This Privacy Policy describes Our policies and pro-cedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. </p>
                        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

                        <p>------------------------------------</p>
                        <h6>Collecting and Using Your Personal Data</h6>
                        <span>Types of Data Collected - Personal Data</span>
                        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                        
                        <ol>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Usage Data</li>
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

export default withRouter(PrivacyPolicy);