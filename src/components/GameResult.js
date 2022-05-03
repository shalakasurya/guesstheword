import React from "react";

const GameResult = ({ game }) => {
    if (game.lost === undefined) {
        return null
    } else {
        return (
            <div>
                {
                    game.lost === true
                        ?
                            <h2>Tried to guess the word "{game.game.word}"
                            and lost with {game.game.guesses.length - game.game.incorrect_guesses.length} correct guesses and {game.game.incorrect_guesses.length} incorrect guesses.
                            </h2>
                        :
                            <h2>Tried to guess the word "{game.game.word}"
                            and won with {game.game.guesses - game.game.incorrect_guesses.length} 
                            correct guesses and {game.game.incorrect_guesses.length} incorrect guesses.
                            </h2>
                }
            </div>
        );
    }
}
export default GameResult;