import React from "react";
import './ErrorMessage.css';

const ErrorMessage = ({ game }) => {
    if (game !== undefined) {
        if ( game.error !== 'undefined' || game.error !== "") {
        
            return (
                <div>
                   <label className="errorMessage">{game.error}</label>
                </div>
            );
        } else return null;
    }
    return null
}
export default ErrorMessage;