import React, { useContext } from "react";
import hasbulla from '../images/has.png'
import {
    GlobalStateContext,
    GlobalDispatchContext,
    SET_MESSAGE
} from "./GlobalState";

const TextInput = () => {
    const globalState = useContext(GlobalStateContext)
    const dispatch = useContext(GlobalDispatchContext)

    const handleChange = (e) => {
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
                />
            </div>
        </>
    )
}

export default TextInput