import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDBucsfzXwhxpXwgEEjaoBYuk89HU3Axs",
  authDomain: "slack-clone-c6aad.firebaseapp.com",
  projectId: "slack-clone-c6aad",
  storageBucket: "slack-clone-c6aad.appspot.com",
  messagingSenderId: "1063280801333",
  appId: "1:1063280801333:web:13d69484bb9be6669b637c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
