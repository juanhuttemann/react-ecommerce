import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDL9xexxpL14eZddFVlqTsBCfX2mkTDCnY",
    authDomain: "react-ecommerce-453af.firebaseapp.com",
    databaseURL: "https://react-ecommerce-453af.firebaseio.com",
    projectId: "react-ecommerce-453af",
    storageBucket: "",
    messagingSenderId: "450363498419",
    appId: "1:450363498419:web:b4c258981cf1eec710f5c6",
    measurementId: "G-XNPXC76Y7E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;