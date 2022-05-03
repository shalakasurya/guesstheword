import React from 'react';


const StartGame = ({startGame}) => {
    return (
        <div>
            <button className='btn_startGame' type='submit' onClick={startGame}>Start Game</button>
        </div>
    );
}

export default StartGame;