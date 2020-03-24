import React from 'react';

function Button() {
    const dq = new Audio('/music/dancingqueen.mp3')
    const play = () => {
        dq.play()
    }
    return (
        <div>
            <button onClick={() => play()}>play</button>
        </div>
    );
}

export default Button;
