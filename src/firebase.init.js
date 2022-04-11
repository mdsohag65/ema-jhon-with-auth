// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1jhkP8vK3ixXm_L7Oppr_3Rsd27RQZJQ",
    authDomain: "ema-jhon-simple-35486.firebaseapp.com",
    projectId: "ema-jhon-simple-35486",
    storageBucket: "ema-jhon-simple-35486.appspot.com",
    messagingSenderId: "103601200705",
    appId: "1:103601200705:web:e2c6cb70632810cf0730c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
