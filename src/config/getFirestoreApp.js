import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAwGph9ZByuVLRsYpA2bRYUFVVVlUxpKCQ",
  authDomain: "juliluli-36561.firebaseapp.com",
  projectId: "juliluli-36561",
  storageBucket: "juliluli-36561.appspot.com",
  messagingSenderId: "361864813613",
  appId: "1:361864813613:web:d28c3903a36f13262deca4"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}