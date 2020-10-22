import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// get access to data on firestore
firestore.collection('users').doc('TR0UkgKlRRjcYujcw1Db').collection('cartItems').doc('h8M8qlq91zHypIElQxOk
');
// the same as above
firestore.doc('/users/TR0UkgKlRRjcYujcw1Db/cartItems/h8M8qlq91zHypIElQxOk');
// collection of all items
firestore.doc('/users/TR0UkgKlRRjcYujcw1Db/cartItems/');