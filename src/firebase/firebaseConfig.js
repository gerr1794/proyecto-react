// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk_lvQam14pMa5bzg8RyI3c0_CkKgID4s",
  authDomain: "c-piko-ecommerce.firebaseapp.com",
  projectId: "c-piko-ecommerce",
  storageBucket: "c-piko-ecommerce.appspot.com",
  messagingSenderId: "548900083315",
  appId: "1:548900083315:web:eac9985c4f1013e9763c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


const querySnapshot = await getDocs(collection(db, "Items"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});