import React from 'react';


function QuoteSimpson ({simpsonQuote}) {

    return(
        <div className='QuoteSimpson'>
            <table>
                <tr><span>{simpsonQuote.character}</span></tr>
                <tr><span>{simpsonQuote.quote}</span></tr>
                <tr><img src={simpsonQuote.image} alt={simpsonQuote.character} />
            </tr>
            </table>
            
            
            
        </div>
    )
}

export default QuoteSimpson;