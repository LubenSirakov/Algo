import React from "react";
import PropTypes from 'prop-types'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

export const SET_MESSAGE = 'SET_MESSAGE'

export const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_MESSAGE: {
            return {
                ...state,
                message: payload
            }
        }
        default:
            return state
    }
}

const GlobalState = (props) => {
    const { initialState, dispatch } = props

    return (
        <GlobalStateContext.Provider value={initialState}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {props.children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

GlobalState.propTypes = {
    initialState: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node
}

export default GlobalState