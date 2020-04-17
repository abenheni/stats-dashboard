import React, { createContext, useContext, useReducer } from 'react';
import ParticipantReducer from '../Reducers/ParticipantReducer';

export const ParticipantContext = createContext();

const initialContext = {
    isFetching: true,
    participants: []
};

const ParticipantContextProvider = (props) => {
    const [participants, dispatch] = useReducer(ParticipantReducer, initialContext)

    return (
        <ParticipantContext.Provider value={{ participants, participantDispatch: dispatch }}>
            {props.children}
        </ParticipantContext.Provider>
    )
}

export default ParticipantContextProvider;