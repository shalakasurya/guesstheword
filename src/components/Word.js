import React from 'react';
import './Word.css';
import GameResult from './GameResult';
import ErrorMessage from './ErrorMessage';

const word = ({ game }) => {
    if (game === 'undefined' || game === "") {
        return (<div><h2>No game started...</h2></div>)
    }
    else if (game.error) {
        let blanks = game.game !== undefined ? game.game.blanks : game.blanks
        return (
            <div>
                <div>
                    <ErrorMessage />
                </div>
                <div className='wordLabel'>
                {
                    blanks.map((blank, i) => {
                        return (<div 
                            key={i}
                            blanks={blank}
                            >                        
                                <input className='lbl_word pa3 ba b--blue bg-lightest-blue' value = {blank || ""} disabled/> 
                            
                        </div>
                        );
                    })
                }
                </div>
            </div>
        )
    }
    else {
        console.log('game in word is: ', game)
        // console.log('Word count : ', game.game.blanks.length);
        // console.log("game is won/lost: ", game.lost)
        // const wordCount = game.game.blanks.length;
        return (
            <div>
                {/* <div>
                    <br />
                    <label>Hint: Your word has "{wordCount}" letter.</label>
                </div> */}
                <div className='wordLabel'>
                {
                    game.game.blanks.map((blank, i) => {
                        return (<div 
                            key={i}
                            blanks={blank}
                            >                        
                                <input className='lbl_word pa3 ba b--blue bg-lightest-blue' value = {blank || ""} disabled/> 
                            
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