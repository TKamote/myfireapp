// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBItrmKPkCdOIHfNZZj_FXjHZvw3Rn4EJI",
  authDomain: "myfireapp-7e846.firebaseapp.com",
  projectId: "myfireapp-7e846",
  storageBucket: "myfireapp-7e846.appspot.com",
  messagingSenderId: "131726350303",
  appId: "1:131726350303:web:6fff44912268e782e9d66a"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app.firebase.app()
}
const auth = firebase.auth();

export { auth };
