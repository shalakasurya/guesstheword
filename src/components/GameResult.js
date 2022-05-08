import React from "react";
import './GameResult.css';

const GameResult = ({ game }) => {
    if (game.lost !== undefined) {
        return (
            <div>
                {   
                    <h2>Tried to guess the word "{game.game.word}"
                    and lost with {game.game.guesses.length - game.game.incorrect_guesses.length} correct guesses and {game.game.incorrect_guesses.length} incorrect guesses.
                    </h2>
                }
            </div>
        );
    } else if (game.won !== undefined) {
        return (
            <div>
                {
                    <h2>Tried to guess the word "{game.game.word}"
                    and won with {game.game.guesses.length} correct guesses and {game.game.incorrect_guesses.length} incorrect guesses.
                    </h2>
                }
            </div>
        );
    }
    else {
        return null
    }
}
export default GameResult;