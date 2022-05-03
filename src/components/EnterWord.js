import React from 'react';

const EnterWord = ({onWordAdded}) => {
    return (
        <div>
            <input className = 'word' type='text' placeholder='Enter word' onChange={onWordAdded}></input>
        </div>
    );
}

export default EnterWord;