import React from 'react';

const SearchWord = ({OnSubmitWord , onWordAdded}) => {
    return (
        <div>
            <button className='btn_submit' type='submit' onSubmit={OnSubmitWord(onWordAdded)}>Submit</button>
        </div>
    );
}

export default SearchWord;