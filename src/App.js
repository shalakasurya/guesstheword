import React from "react";
import { useState, useEffect } from 'react';
import Word from './components/Word';
import './App.css';
import './components/Word.css';
import ErrorMessage from "./components/ErrorMessage";



function App() {
  const [game, setGame] = useState('');
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    console.log("e :",e)
    e.preventDefault();
    console.log('game in submit: ', game)
    let id = game.game !== undefined ? game.game.id : game.id  // Use something like ternary operator
    fetch(`https://sheltered-peak-48230.herokuapp.com/https://word-guessing-game.onrender.com/${id}/${word}`, {
        method: 'put'
      },)
        .then(response => response.json())
        .then((game) => {
          setGame(game)
          console.log("game Submit:", game);
        })
    setWord(() => "");
    }
  

  const startGame = () => {
    setGame('')
    fetch("https://sheltered-peak-48230.herokuapp.com/https://word-guessing-game.onrender.com/", {
      method: 'post' 
    },)
      .then(response => response.json())
      .then((game) => { 
        
        setGame(game);
        console.log("game StartGame:", game);
      })
  }

  // useEffect(() => {
  //   console.log('useEffect game: ',game);
  //   <Word game={game} />
  //   }
  // )

  const onInputChange = (event) => {
    const { value } = event.target;
 
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setWord(event.target.value)
    }  
  }

  return (
    <div className="App">
      <div className="container">
          <div>
            <h1>Guess The Word</h1>
          </div>

          <div>
            <button className='btnScreen' onClick={startGame} type='submit'>Start Game</button>
          </div>

          <form onSubmit={handleSubmit} className= 'form_submit'>
              <input required
                  className='pa3 ba b--blue bg-lightest-blue'
                  min="1"
                  type='text'
                  placeholder='Enter word'
                  onChange={onInputChange}
                  value={word}
                  disabled={!game}
                />
               
                <button className='btnScreen'
                        type='submit'
                        disabled={!game}
                >
                  Submit
                </button>
              
          </form>
          <div>
            <ErrorMessage game={ game }/>
          </div>
          <div>
            <Word game={game} />
        </div>
        </div>
    </div>
  );
}

export default App;
