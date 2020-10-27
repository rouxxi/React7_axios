import React from 'react';


function QuoteSimpson ({simpsonQuote}) {

    return(
        <div className='QuoteSimpson'>
            <span>{simpsonQuote.character}</span>
            <span>{simpsonQuote.quote}</span>
            <img src={simpsonQuote.image} alt={simpsonQuote.character} />
        </div>
    )
}

export default QuoteSimpson;