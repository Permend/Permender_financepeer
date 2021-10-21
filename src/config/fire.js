import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import 'firebase/compat/storage'
// import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCeREtgEN_wWGweWBDTeLSuVZfO3uhpHAM",
    authDomain: "financepeer-94c5b.firebaseapp.com",
    // databaseURL: "https://react-firebase-auth-3ca91.firebaseio.com",
    projectId: "financepeer-94c5b",
    storageBucket: "financepeer-94c5b.appspot.com",
    messagingSenderId: "71411400762",
    appId: "1:71411400762:web:e0ffeb76a96af8ab4fb503"
  };

const fire = firebase.initializeApp(firebaseConfig);



export default fire;