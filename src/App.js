import React from "react";
import { useState, useEffect } from 'react';
import Word from './components/Word';
import './App.css';
import './components/Word.css';


function App() {
  const [game, setGame] = useState('');
  const [word, setWord] = useState('');

  // const handleSubmit = (e) => {
  //   console.log("e :",e)
  //   e.preventDefault();
  //   fetch(`https://sheltered-peak-48230.herokuapp.com/https://word-guessing-game.onrender.com/${game.game.id}/${word}`, {
  //       method: 'put'
  //     },)
  //       .then(response => response.json())
  //       .then((word) => {
  //      //   setWord(word);
  //         console.log("word :", word);
  //       })
  //   }

  const handleSubmit = (e) => {
    console.log("e :",e)
    e.preventDefault();
    fetch(`https://sheltered-peak-48230.herokuapp.com/https://word-guessing-game.onrender.com/${game.game.id}/${word}`, {
        method: 'put'
      },)
        .then(response => response.json())
        .then((game) => {
          setGame(game)
          console.log("game Submit:", game);
        })
    }
  

  const startGame = () => {
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
  //   <Word game={game} />
  //   }
  // )

  return (
    <div className="App">
      <div>
        <h1>Guess The Word</h1>
      </div>
      <div>
        <button className='btn_startGame' onClick={startGame} type='submit'>Start Game</button><br/><br/>
      </div>
      <form onSubmit={handleSubmit}>
        <input required min="1" type='text' placeholder='Enter word' onChange={(e) => setWord(e.target.value)}/><br /><br />
        <button className='btn_submit' type='submit'>Submit</button><br />
      </form>
      <div>
        <Word game={game} />
      </div>
      
    </div>
  );
}

export default App;
