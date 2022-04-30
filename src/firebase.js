import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyALWJvfq-bjpTytVJZOD97jsUmeR0r89_M",
    authDomain: "studyapp-1428d.firebaseapp.com",
    projectId: "studyapp-1428d",
    storageBucket: "studyapp-1428d.appspot.com",
    messagingSenderId: "608245802504",
    appId: "1:608245802504:web:015542c1eb06221c7f53bd",
    measurementId: "G-0K7KJZEVVT"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()