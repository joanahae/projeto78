import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
const firebaseConfig = {
  apiKey: "AIzaSyD0D7zwjSx_fOTkmzpsNZ7SMn5vN9pc-Og",
  authDomain: "projeto36-505ae.firebaseapp.com",
  databaseURL: "https://projeto36-505ae-default-rtdb.firebaseio.com",
  projectId: "projeto36-505ae",
  storageBucket: "projeto36-505ae.appspot.com",
  messagingSenderId: "255491623220",
  appId: "1:255491623220:web:f9d275f92bf887f5bd7d61"
}


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
