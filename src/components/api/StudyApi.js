import firebase from '../Firebase';
import 'firebase/database';

const database = firebase.database();

export const fetchStudies = async () => {
    const studyList = await database.ref('/studies').once('value').then((snapshot) => {
        return snapshot.val()
    });
    return studyList;
}