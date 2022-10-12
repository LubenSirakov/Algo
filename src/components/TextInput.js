import React, { useContext, useState } from "react";
import hasbulla from '../images/has.png'
import {
    GlobalStateContext,
    GlobalDispatchContext,
    SET_MESSAGE
} from "./GlobalState";

const TextInput = () => {
    const [message, setMessage] = useState('')
    const globalState = useContext(GlobalStateContext)
    const dispatch = useContext(GlobalDispatchContext)

    const handleChange = (e) => {
        setMessage(e.target.value)
        dispatch({ type: SET_MESSAGE, payload: e.target.value })
    }

    return (
        <>
            <h1>
                Enter something to algo
            </h1>
            <div className='input-div'>
                <img src={hasbulla} className="hasbulla" alt="hasbulla" />
                <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                />
            </div>
        </>
    )
}

export default TextInput