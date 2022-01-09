import React from "react";

const Phrase = ({text}) => {
    const phrases = [...text]
    return (
        <div className="list">  
            {phrases.map((phrase, index) => (
                <div key={index} className="block"><h3>{phrase}</h3></div>
            ))}
        </div>
    )
}


export default Phrase;