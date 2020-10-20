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


firebase.initializeApp(config);

// implement Google authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;