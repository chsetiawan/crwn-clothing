import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyARo7US-VP5K8C3jOl0ys8OsfPTMdwkAbo",
  authDomain: "crwn-db-37ac2.firebaseapp.com",
  databaseURL: "https://crwn-db-37ac2.firebaseio.com",
  projectId: "crwn-db-37ac2",
  storageBucket: "crwn-db-37ac2.appspot.com",
  messagingSenderId: "27275969766",
  appId: "1:27275969766:web:5d1497c676ab56f8a6a727",
  measurementId: "G-5H0M3R1JTP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot); 

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error.log(`error creating user: ${error.message}`);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;