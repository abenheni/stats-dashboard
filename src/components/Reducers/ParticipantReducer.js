const ParticipantReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_PARTICIPANTS':
            return { ...state, isFetching: true }
        case 'FETCH_PARTICIPANTS_SUCCESS':
            {const newState = state;
            newState.participants = action.participants;
            return { ...newState, isFetching: false }}
        case 'FETCH_PARTICIPANTS_FAILURE':
            return { ...state, isFetching: false }
        case 'ADD_PARTICIPANT':
            {const newState = state;
            newState.participants.push(action.participant)
            return newState;}
        case 'REMOVE_PARTICIPANT':
            {const newState = state;
            const newParticipants = newState.participants.filter(participant => participant.id !== action.id)
            newState['participants'] = newParticipants;
            return newState;}
        default:
            return state
    }
}

export default ParticipantReducer;