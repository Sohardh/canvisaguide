
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDLzvwtu2vFR75enTOaE0C1LqMZRs-41gs",
    authDomain: "canvisaguide-94829.firebaseapp.com",
    databaseURL: "https://canvisaguide-94829.firebaseio.com",
    projectId: "canvisaguide-94829",
    storageBucket: "",
    messagingSenderId: "279064844567"
  };

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;