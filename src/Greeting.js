import React from 'react';
import Max from './Max';

const Greeting = (props) => {
    const {furColor, eyeColor} = props;
    return (
        <div>
            <Max 
                species="dog"
            />
            <p>He is {furColor}.</p>
            <p>He has {eyeColor} eyes.</p>
            <h1>Hello World!!!!!!</h1>
            <Max 
                species="cat"
            />
            <Max />
        </div>
    )
};

export default Greeting; 