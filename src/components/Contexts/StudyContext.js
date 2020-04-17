import React, { createContext, useContext, useReducer } from 'react';
import StudyReducer from '../Reducers/StudyReducer';

export const StudyContext = createContext();

const initialContext = {
    isFetching: true,
    studies: []
};

const StudyContextProvider = (props) => {
    const [studies, dispatch] = useReducer(StudyReducer, initialContext);

    return (
        <StudyContext.Provider value={{studies, studyDispatch: dispatch}}>
            {props.children}
        </StudyContext.Provider>
    )
}

export default StudyContextProvider;