import React from 'react';
import './Word.css';
import GameResult from './GameResult';

const word = ({ game }) => {
    
    if (game === 'undefined' || game === "") {
        return (<div><h2>No game started...</h2></div>)
    }
    else {
        console.log('Word count : ', game.game.blanks.length);
        console.log("game is won/lost: ", game.lost)
        const wordCount = game.game.blanks.length;
        const dash = "_";
        return (
            <div>
                <div>
                    <br />
                    <label>Hint: Your word has "{wordCount}" letter.</label>
                </div>
                <div>
                {
                    game.game.blanks.map((blank, i) => {
                        return (<div
                            key={i}
                            blanks={blank}
                        >     
                            <label > {blank} {dash}</label>
                           
                        </div>
                        );
                    })
                }
                </div>
                <div>
                     <GameResult game={game} />
                </div>
               
            </div>
        );
    }
}

export default word;