import React from "react";

const OutputAlgo = (props) => {
    return (
        <div className='ouput-div'>
            {props.newAlgoSenctence
                ? (
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
                : (
                    <>
                        <h3 className='output'>Размени буквите</h3>
                        <button
                            className='btn-invisible '
                        >
                        </button>
                    </>
                )}
        </div>
    )
}

OutputAlgo.defaultProps = {
    newAlgoSenctence: ''
}

export default OutputAlgo