

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Thanks.css';
import Header from './Header';

class Thanks extends Component {
    constructor(props){
        super(props);
    }
    backHome = (e) =>{
        e.preventDefault();
        console.log("Back Home!");
        this.props.history.push('/');
    }


    render(){
    return (
        <div>
            <Header/>
        <section class="thanksBg">
            <h2>Thanks for your submission!</h2>
            <p>Your <span>750 BuyMore Dollars</span> will be added to your account within 6 to 8 weeks</p>
            <button id="backHome" onClick={this.backHome}>Back Home</button>
        </section>
        </div>
    )
}
}

export default withRouter(Thanks);