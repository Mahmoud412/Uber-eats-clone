import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEoVGquXT2SF15TKS-LqQAiM_NTzhFifI",
  authDomain: "uber-eats-clone-7e604.firebaseapp.com",
  projectId: "uber-eats-clone-7e604",
  storageBucket: "uber-eats-clone-7e604.appspot.com",
  messagingSenderId: "761536197471",
  appId: "1:761536197471:web:506dd30e8cef5d55d7bcea",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
