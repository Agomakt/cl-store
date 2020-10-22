import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAhDWF7aq5s75RuEFnQAIgyr0gdYhlWMHo",
  authDomain: "clothesstore-db-6deef.firebaseapp.com",
  databaseURL: "https://clothesstore-db-6deef.firebaseio.com",
  projectId: "clothesstore-db-6deef",
  storageBucket: "clothesstore-db-6deef.appspot.com",
  messagingSenderId: "885254684317",
  appId: "1:885254684317:web:2e6702a15c00e2d6831e74"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc('users/123asdsadwwff'))
  // const userRef = firestore.doc('users/TR0UkgKlRRjcYujcw1Db');
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  // console.log(snapShot)

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    // because of async code
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
  



}


firebase.initializeApp(config);

// implement Google authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;