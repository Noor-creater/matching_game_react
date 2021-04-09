
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Quiz.css';
import Header from '../components/Header.js';
import quizBox from '../img/quizBox.svg';

class Quiz extends Component {
    constructor(props){
        super(props);
    }
    backHome = (e) =>{
        e.preventDefault();
        console.log("Back Home!");
        this.props.history.push('/');
    }

    goToThanks = (e) =>{
        e.preventDefault();
        // console.log("Instruction");
        this.props.history.push({
            pathname:'/thanks',
            });
    }


    render(){
    return (
        <div class="quizBg">
            <Header/>
            <div className="quizContainer">
                <div className="quizContent">
                    <h3>One More Step to Your Prize!</h3>
                    <p>Please answer the following question</p>
                    <h3>14 + 7 = ?</h3>
                    
                    <div className="anwserContainer">
                        <button className="btn" id="backHome" onClick={this.goToThanks}>21</button>
                        <button className="btn">20</button>
                    </div>
                </div>
                <img className="quizBox" src={quizBox} alt="Quiz board"/>
            </div>
        </div>
    )
}
}

export default withRouter(Quiz);