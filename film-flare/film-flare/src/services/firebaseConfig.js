// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1_QJ4idT9incIb2UpUVOlZNI1LDMjLCc",
  authDomain: "filmflare-b8186.firebaseapp.com",
  projectId: "filmflare-b8186",
  storageBucket: "filmflare-b8186.appspot.com",
  messagingSenderId: "768626413520",
  appId: "1:768626413520:web:e9e810aea6cc6a7bf873d5"
};

console.log('TEST')
// Initialize Firebase
const firebaseInit = initializeApp(firebaseConfig);
const auth = getAuth(firebaseInit);

export default firebaseInit
export { auth }