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

export const ItemsTot = () => {
  const consulta = getDocs(collection(db, "items"))
  return consulta;
}

export const Categ = (categoria) => {
  const consulta = collection(db, "items")
  const consulta2 = consulta(consulta, where("categoria", "==", categoria))
  const consulta3 = getDocs(consulta2)
  return consulta3;
}

