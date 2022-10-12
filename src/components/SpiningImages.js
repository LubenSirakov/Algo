import React from "react";
import pepe from '../images/pepe.png'
import dolan from '../images/dolan.png'
import gooby from '../images/gooby.png'

const SpinningImages = () => {
    return (
        <div className='img-container'>
            <img src={pepe} className="App-logo" alt="logo" />
            <img src={dolan} className="App-logo" alt="logo" />
            <img src={gooby} className="App-logo" alt="logo" />
        </div>
    )
}

export default SpinningImages