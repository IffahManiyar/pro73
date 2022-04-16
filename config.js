import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB2DiircNNp-51FyzaHSNHd0br6iOGd-1M",
    authDomain: "pro-ae3f6.firebaseapp.com",
    projectId: "pro-ae3f6",
    storageBucket: "pro-ae3f6.appspot.com",
    messagingSenderId: "366713302341",
    appId: "1:366713302341:web:4ea3ae62f8a138b4c0622c"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


