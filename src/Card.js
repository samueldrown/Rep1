import React from 'react';

const Card = ({name,email,id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
        {/* The above is possible through tachyons*/}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            {/* props id populates with 0,1,...,n for the number of robots selected in the 
            index.js file as this is just a component so is replicated at the 
            container level. Note that Javascript terms (e.g. props. anything must be
            encompassed in curly brackets) */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;