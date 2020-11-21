import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBM04qjpX7yFViLPabSBec21KivL9OVpI8",
  authDomain: "the-gifted-piggy-ecommerce-db.firebaseapp.com",
  databaseURL: "https://the-gifted-piggy-ecommerce-db.firebaseio.com",
  projectId: "the-gifted-piggy-ecommerce-db",
  storageBucket: "the-gifted-piggy-ecommerce-db.appspot.com",
  messagingSenderId: "339060531133",
  appId: "1:339060531133:web:5d4844c841b756b67dfcd4",
  measurementId: "G-72YR451W5V"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
