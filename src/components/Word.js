import React from 'react';
import './Word.css';
import GameResult from './GameResult';
import ErrorMessage from './ErrorMessage';

const word = ({ game }) => {
    if (game === 'undefined' || game === "") {
        return (<div><h2>Game not started yet...</h2></div>)
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
                            <input
                                className='lbl_word'
                                value={blank || ""}
                                disabled
                            /> 
                        </div>
                        );
                    })
                }
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className='wordLabel'>
                {
                    game.game.blanks.map((blank, i) => {
                        return (<div 
                            key={i}
                            blanks={blank}
                            >                        
                            <input
                                className='lbl_word'
                                value={blank || ""}
                                disabled
                            /> 
                            
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