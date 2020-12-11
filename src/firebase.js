import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyA1UVMc1mkczcJft_BCrGB0gfDsD2s0fMw",
  authDomain: "robinhood-clone-85fe7.firebaseapp.com",
  projectId: "robinhood-clone-85fe7",
  storageBucket: "robinhood-clone-85fe7.appspot.com",
  messagingSenderId: "962916810288",
  appId: "1:962916810288:web:6b1b18e46bffd8aab1f7f5",
  measurementId: "G-GHRBG5FQNX"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export {db}
