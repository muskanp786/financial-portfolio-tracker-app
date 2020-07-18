
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDZUpxdXVFfS3ZfJ0EoT-EllBpHLNGELQ4",
  authDomain: "financial-portfolio-30240.firebaseapp.com",
  databaseURL: "https://financial-portfolio-30240.firebaseio.com",
  projectId: "financial-portfolio-30240",
  storageBucket: "financial-portfolio-30240.appspot.com",
  messagingSenderId: "223815963064",
  appId: "1:223815963064:web:4e5f3ef6edb32a9a89bf4d",
  measurementId: "G-FSH9XWVXFF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export default firebase;