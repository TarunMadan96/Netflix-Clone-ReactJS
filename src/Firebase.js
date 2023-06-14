import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC6eAsubIx0dCGsn5Jr2LPOVJzVg-rqOBk",
    authDomain: "netflix-clone-daa00.firebaseapp.com",
    projectId: "netflix-clone-daa00",
    storageBucket: "netflix-clone-daa00.appspot.com",
    messagingSenderId: "1087374102451",
    appId: "1:1087374102451:web:7a683044d159143a7ac5c6",
    measurementId: "G-4E0YGGGPW6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;