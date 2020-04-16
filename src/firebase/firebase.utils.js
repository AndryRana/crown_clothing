import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {    
        apiKey: "AIzaSyDEyNsOUnqNPF2xuJmdA9mVj_B9u9RW4Hc",
        authDomain: "crwn-db-6e30c.firebaseapp.com",
        databaseURL: "https://crwn-db-6e30c.firebaseio.com",
        projectId: "crwn-db-6e30c",
        storageBucket: "crwn-db-6e30c.appspot.com",
        messagingSenderId: "699828778830",
        appId: "1:699828778830:web:fc04cbdf4c2c114f7b901f",
        measurementId: "G-43XHPKWM1T"      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
