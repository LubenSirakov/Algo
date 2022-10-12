import React from "react";

const OutputAlgo = (props) => {

    const renderAlgo = () => {
        return (
            <>
                <h3 className='output'>{props.newAlgoSenctence}</h3>
                <button
                    className='algo-btn'
                    onClick={() => { navigator.clipboard.writeText(props.newAlgoSenctence) }}
                >
                    Copy
                </button>
            </>
        )
    }

    const renderDefaultText = () => {
        return (
            <>
                <h3 className='output'>Размени буквите</h3>
                <button
                    className='btn-invisible'
                >
                </button>
            </>
        )
    }

    return (
        <div className='ouput-div'>
            {props.newAlgoSenctence
                ? renderAlgo()
                : renderDefaultText()
            }
        </div>
    )
}

OutputAlgo.defaultProps = {
    newAlgoSenctence: ''
}

export default OutputAlgo