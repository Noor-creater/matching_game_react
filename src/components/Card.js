import React from 'react'
import Icecream from './images/Icecream.js'
import Mushrooms from './images/Mushrooms.js'
import Hearts from './images/Hearts.js'
import Star from './images/Star.js'
import Unicorn from './images/Unicorn.js'
import "../pages/game.css"


const Card = (props) => {
  let image;
  const cardImage = props.card.image
  if (cardImage === 'Hearts') {
    image = (
      <Hearts/>
    )
  } else if (cardImage === 'Icecream') {
    image = (
      <Icecream/>
    )
  } else if (cardImage === 'Mushrooms') {
    image = (
      <Mushrooms/>
    )
  } else if (cardImage === 'Star') {
    image = (
      <Star/>
    )
  } else if (cardImage === 'Unicorn') {
    image = (
      <Unicorn/>
    )
  }

  const dotNumber = 100
  let dots = [...Array(dotNumber)].map((e, i) => {
    return (
      <div className="dot" key={i}></div>
    )
  })

  return (
    
    <div className={`card-wrapper ${props.card.isReset? "is-reset" : ""}`}  onClick={() => props.onCardClick(props.card)}>
      <div className={`card-container ${props.card.isVisible ? "is-flipped" : ""}`}>
        <div className="game-card card-back">
          {/* <div className="dots">{dots}</div> */}
          </div>
        <div className={`game-card card-front ${props.card.isMatched ? "is-matched" : ""}`}>
          {image}
        </div>
      </div>
    </div>
  );
}

export default Card


