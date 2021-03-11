import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAOKOLibVlmIv_SVPJ07jlq8S0FYsbuNFw",
    authDomain: "batter-system-2f658.firebaseapp.com",
    projectId: "batter-system-2f658",
    storageBucket: "batter-system-2f658.appspot.com",
    messagingSenderId: "265617963273",
    appId: "1:265617963273:web:f71352dcea92841790fbd8"
 
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();