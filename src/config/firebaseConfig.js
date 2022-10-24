import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: "356425929374",
    appId: "1:356425929374:web:191692eef10eafa25e618f",
    measurementId: ""
};

const app = firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
firebase.analytics();

export {app, googleAuthProvider, facebookAuthProvider};