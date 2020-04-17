import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD6hs3mo2Xhj2XLN5Xy75A-GVQLnIbBXZo",
    authDomain: "cough-detection.firebaseapp.com",
    databaseURL: "https://cough-detection.firebaseio.com/",
  }
firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();