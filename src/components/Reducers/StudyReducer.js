const StudyReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_STUDIES':
            return { ...state, isFetching: true }
        case 'FETCH_STUDIES_SUCCESS':
            {const newState = state;
            newState.studies = action.studies;
            return { ...newState, isFetching: false }}
        case 'FETCH_STUDIES_FAILURE':
            return { ...state, isFetching: false }
        case 'ADD_SURVEY':
            {const newState = state;
            newState.studies.push(action.study)
            return newState;}
        case 'REMOVE_SURVEY':
            {const newState = state;
            const newStudies = newState.studies.filter(study => study.title !== action.title)
            newState['studies'] = newStudies;
            return newState;}
        default:
            return state
    }
}

export default StudyReducer;