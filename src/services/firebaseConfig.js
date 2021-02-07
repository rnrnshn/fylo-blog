
import firebase from 'firebase';
import 'firebase/firebase-firestore';

// 2. Copy the firebaseConfig on the project settings
const firebaseConfig = {
  apiKey: "AIzaSyCEB--TB2vDX1X3inow4W_giMvXIlI1zDI",
  authDomain: "aqueous-argon-302905.firebaseapp.com",
  projectId: "aqueous-argon-302905",
  storageBucket: "aqueous-argon-302905.appspot.com",
  messagingSenderId: "1076790295569",
  appId: "1:1076790295569:web:3c00ad311adddde6aa05b0"
};

// 3. Initialize the firebaseConfig and fire the firestore method
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;