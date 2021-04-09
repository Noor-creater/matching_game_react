
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import Header from '../components/Header.js';
import Card from '../components/Card.js';
// import Modal from "../components/Modal.js";
import StopWatch from "../components/StopWatch.js";
import TimerBoard from "../img/boardTimer.svg";
// import MatchBoard from "../img/boardMatch.svg";
// import MatchTitle from "../img/asset-pink.svg"
import BgImg from '../img/formbg.png';
import './game.css';


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
    top: 140px;
    padding: 0.5rem 1rem ;

    h3 {
        font-weight: 700;
        color: white;
        font-size: 21px;
        margin-bottom: 1.8rem;
        color: #fff;
    }

    p {
        font-size: 15px;
        color: #fff;
    }
`;

const Footer = styled.div`
  position: relative;
  top: 0px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  with: 100%;
  height: auto;  
`;

class Game extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      flippedCards: [],
      matchedCards: [],
      moveCount: 0,
      isClickDisabled: false,
      isModalOpen: false,
      images:["Hearts", "Star", "Mushrooms", "Unicorn", "Icecream"],
      isStarted: false,
    }
  }

  componentDidMount() {
    this.createBoard();
  }

  createBoard = () => {
    const cards = [];
    const cardImages = this.state.images.concat(this.state.images).sort(() => Math.random() - 0.5)
    for (let i=1; i <= cardImages.length; i++) {
      const card = {
        id: i,
        isVisible: false,
        isMatched: false,
        isReset: false,
        image: cardImages[i-1]
      }
      cards.push(card)
    }
    this.setState({ cards })
  }

  clearBoard = () => {
    this.setState({ cards: [], flippedCards: [], matchedCards: [], isClickDisabled: false, moveCount: 0 }, () => this.createBoard())
  }

  replay = () => {
    if (this.state.isModalOpen) this.setState({isModalOpen: false})
    const cards = [...this.state.cards]
    cards.forEach(card => {
      card.isVisible = false
      card.isReset = true
    })
    this.setState({cards})
    setTimeout(() => {
      this.clearBoard();
    }, 500)
    this.setState({isStarted: false})
  }

  handleCardClick = (clickedCard) => {
    // update flipped status
    const flippedCards = [...this.state.flippedCards]
    if (this.state.flippedCards.length < 2  && !this.state.isClickDisabled && !clickedCard.isVisible) {
      const cards = [...this.state.cards]
      cards.forEach(card => {
        if (card.id === clickedCard.id) {
          card.isVisible = !card.isVisible
          flippedCards.push(card)
        }
      })
      this.setState({cards, flippedCards}, () => {
        // max 2 cards flipped at once
        if (flippedCards.length === 2) {
          
          this.setState({ isClickDisabled: true }, () => this.checkForMatch(flippedCards))
        }
      })
    }
  }

  checkForMatch = (flippedCards) => {
    if (flippedCards[0].image === flippedCards[1].image) {
      let matchedCards = [];
      flippedCards.forEach(card => card.isMatched = true)
      matchedCards = flippedCards.concat(this.state.matchedCards)

      // set isMatched to true for matched cards
      this.setState({ flippedCards: [], matchedCards, isClickDisabled: false }, () => {
        this.setState((state) => ({moveCount: state.moveCount + 1 }))
        this.checkForWin()
      })
    } else {
      setTimeout(() => {
        this.setState({ flippedCards: [] , isClickDisabled: false}, () => this.hideAllCards())
      }, 500)
    }
  }

  hideAllCards = () => {
    const cards = [...this.state.cards]
    cards.map(card => !card.isMatched ? card.isVisible = false : card.isVisible = true)
    this.setState({cards})
  }

  checkForWin = () => {
    if (this.state.matchedCards.length === this.state.cards.length) {
      setTimeout(() => {
      this.setState({isModalOpen: true})
      }, 500)
      this.goToSuccess()
    }

  }
  goToFailure = () => {
    this.props.history.push({
      pathname:'/failure',
      });
  }

  goToSuccess = () => {
    this.props.history.push({
      pathname:'/success',
      });
  }
  
  render(){
  return (
    <>
    <GlobalStyle/>
    <Background style={{backgroundImage: `url(${BgImg})`}}>
      <Container>
        <Header/>
        {/* <Modal moveCount={this.state.moveCount} show={this.state.isModalOpen} onReplay={this.replay} /> */}
        <Content>
          {/* <h3>Matching Game</h3> */}
          <div className="theGame">
              {this.state.cards.map((card, index) => {
                return (
                  <Card card={card} key={index} onCardClick={this.handleCardClick}/>
                );
              })}
          </div>
          <Footer>
            <div className="total">
              <div className="move-count">
                <p>Total Matches<br/>
                  <span>{this.state.moveCount}</span>
                </p>
              </div>
              <img className="matchBoard" src={TimerBoard} alt="Match Count Board"/>
            </div>
            <div className="timer">
              <StopWatch count={this.state.moveCount} isStarted={this.state.isStarted} onReplay={this.replay} onFailure={this.goToFailure}/>
              <img className="timerBoard" src={TimerBoard} alt="Match Count Board"/>
            </div>
          </Footer>
        </Content>
        {/* <img className="title" src={MatchTitle} alt="Match Board"/> */}
      </Container>
      </Background>
    </>
  );
}
}

export default withRouter(Game);
