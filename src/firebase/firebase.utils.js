import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAC2_M5soNbvwg2Ou2sMIG_3YC4ItNvM10",
    authDomain: "crwn-db-87582.firebaseapp.com",
    projectId: "crwn-db-87582",
    storageBucket: "crwn-db-87582.appspot.com",
    messagingSenderId: "492659204177",
    appId: "1:492659204177:web:87780d7c8cdfa8468dd870"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

