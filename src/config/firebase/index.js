import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBfAgu2N3rHmd9u7gIZMlOWb6uw6Hpno7k",
    authDomain: "simple-notes-76ef6.firebaseapp.com",
    databaseURL: "https://simple-notes-76ef6.firebaseio.com",
    projectId: "simple-notes-76ef6",
    storageBucket: "simple-notes-76ef6.appspot.com",
    messagingSenderId: "968203463670",
    appId: "1:968203463670:web:9754843cc67ad74ee835d7",
    measurementId: "G-RQXF4TN3SY"
};

firebase.initializeApp(firebaseConfig)

export default firebase