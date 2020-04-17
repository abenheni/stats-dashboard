import firebase from '../Firebase';
import 'firebase/database';
import { fetchStudies } from './StudyApi';

const database = firebase.database();

export const fetchParticipants = async () => {
    const participantList = await database.ref('/participants').once('value').then((snapshot) => {
        return snapshot.val()
    })
    return participantList;
}

export const addParticipant = async (participant) => {
    const participantList = await fetchParticipants();
    participantList.push(participant);
    database.ref('/participants').set(participantList);
    const studies = await fetchStudies();
    studies.forEach(element => {
        if (element.title === participant.study) element.participants.push(participant.id)
    });
    database.ref('/studies').set(studies);
}