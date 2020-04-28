import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqmC1jrsOmTz_ItFJRUp5NIooLWYIW3fo",
    authDomain: "fitbittracker-d0250.firebaseapp.com",
    databaseURL: "https://fitbittracker-d0250.firebaseio.com",
    projectId: "fitbittracker-d0250",
    storageBucket: "fitbittracker-d0250.appspot.com",
    messagingSenderId: "146156964766",
    appId: "1:146156964766:web:4382a5c32407afad5d648f",
    measurementId: "G-WYRTXD7KG9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;