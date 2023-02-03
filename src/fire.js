import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyCqZaLaE8UZSWWzK9klF-SsVoLNTt3eZ0o",
  
    authDomain: "tech-incubator-4bde7.firebaseapp.com",

    databaseURL: "https://tech-incubator-4bde7-default-rtdb.firebaseio.com",

    projectId: "tech-incubator-4bde7",
  
    storageBucket: "tech-incubator-4bde7.appspot.com",
  
    messagingSenderId: "425187613130",
  
    appId: "1:425187613130:web:acd621ca8975b33748d733"
  
  };
  
  
  // Initialize Firebase
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;