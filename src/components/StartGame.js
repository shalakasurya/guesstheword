import React from 'react';


const StartGame = ({startGame}) => {
    return (
        <div>
            <button className='btn_startGame' onClick={startGame} type='submit'>Start Game</button>
        </div>
    );
}

export default StartGame;