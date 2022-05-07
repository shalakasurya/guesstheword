import React from "react";

const ErrorMessage = ({ game }) => {
    // console.log('game.error :', game.error);
    if (game !== undefined) {
        if ( game.error !== 'undefined' || game.error !== "") {
        
            return (
                <div>
                   <label>{game.error}</label>
                </div>
            );
        } else return null;
    }
    return null
}
export default ErrorMessage;