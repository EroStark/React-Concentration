import React from 'react';
import { render } from 'react-dom';
import './index.css'

const styles = {
  img: {
    width: "25%"
  }
}

const Deck = props => {
  const { cards, changer } = props

  return (
    <div>
      {
        cards.map(card => {
          return card.flipped ?
            <img key={card.id} name={card.id} src={`https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/${card.name}.png`} alt='card' />
            : <img key={card.id} name={card.id} onClick={changer} src="https://raw.githubusercontent.com/C4Q/AC_4_Web/master/units/react/exercises/objects_and_arrays/cards/back.png" alt='card' />
        }
        )}
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();


    this.deck = [
      { id: 0, name: "apple", flipped: false },
      { id: 1, name: "apple", flipped: false },
      { id: 2, name: "camera", flipped: false },
      { id: 3, name: "camera", flipped: false },
      { id: 4, name: "clover", flipped: false },
      { id: 5, name: "clover", flipped: false },
      { id: 6, name: "coffee", flipped: false },
      { id: 7, name: "coffee", flipped: false },
      { id: 8, name: "heart", flipped: false },
      { id: 9, name: "heart", flipped: false },
      { id: 10, name: "key", flipped: false },
      { id: 11, name: "key", flipped: false },
      { id: 12, name: "paw", flipped: false },
      { id: 13, name: "paw", flipped: false },
      { id: 14, name: "smiley", flipped: false },
      { id: 15, name: "smiley", flipped: false },
      { id: 16, name: "snowflake", flipped: false },
      { id: 17, name: "snowflake", flipped: false },
      { id: 18, name: "star", flipped: false },
      { id: 19, name: "star", flipped: false }]

    this.state = {
      apple: false,
      back: false,
      camera: false,
      clover: false,
      coffee: false,
      heart: false,
      key: false,
      paw: false,
      smiley: false,
      snowflake: false,
      star: false,
      deck: [],
      clicked: false
    }


  }

  shuffleCardArray = (array) => {
    var i = 0
      , j = 0
      , temp = null
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return (array)
  }

  handleFlips = e => {
    const ed = parseInt(e.target.name) //needed the type to be a number
    const { deck } = this.state
    const card = deck.find(card => (card.id === ed)) //tocompare in the find
    card.flipped = true
    const alreadyFlipped = deck.filter(card => card.flipped === true)

    if( alreadyFlipped.length === 2){
      console.log('got here')
    }

    console.log('alreadyFlipped', alreadyFlipped)
    this.setState({
      clicked: true
    })
  }

  componentDidMount = () => {
    const shuffleFunc = this.shuffleCardArray
    const deck = this.deck
    const shuffle = shuffleFunc(deck)
    this.setState({
      deck: shuffle
    })
  }

  render() {

    const { deck } = this.state

    return (
      <div>
        <h3> Let's Play Concentration </h3>

        <Deck cards={deck} currentState={this.state} changer={this.handleFlips} />
      </div>

    )


  }
}
render(<App />, document.getElementById('root'));
