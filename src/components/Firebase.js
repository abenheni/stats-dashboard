import * as firebase from 'firebase/app';
import { API_KEY } from '../../apiConfig';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "cough-detection.firebaseapp.com",
    databaseURL: "https://cough-detection.firebaseio.com/",
  }
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();