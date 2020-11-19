import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBhRZu2VcGT2QoIHacw52C350f9DKN1nVY",
    authDomain: "the-gifted-piggy-db.firebaseapp.com",
    databaseURL: "https://the-gifted-piggy-db.firebaseio.com",
    projectId: "the-gifted-piggy-db",
    storageBucket: "the-gifted-piggy-db.appspot.com",
    messagingSenderId: "513297034213",
    appId: "1:513297034213:web:95fa68b4fe6b4fd1075d0c",
    measurementId: "G-4JD185ZFL2"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;