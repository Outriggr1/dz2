import React, {useState} from 'react';

const Card = () => {
    const [blue, setBlue] = useState('blue')
    const [red, setRed] = useState('red')

    const blueClick = () => {
        setBlue(red)
        setRed(blue)
    }

    const redClick = () => {
        setRed(blue)
        setBlue(red)
    }

    return (<>
    <div style={{
            width: 100,
            height: 100,
            backgroundColor: blue
        }} onClick={blueClick}>
        </div>      
        <div style={{
            width: 100,
            height: 100,
            backgroundColor: red
        }} onClick={redClick}>
        </div>         
    </> 
    );
};

export default Card;
