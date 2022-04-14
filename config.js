// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNB2DPVBJCABY0rH2kF0ebtDjVehSlwVQ',
  authDomain: 'final-project-b5466.firebaseapp.com',
  projectId: 'final-project-b5466',
  storageBucket: 'final-project-b5466.appspot.com',
  messagingSenderId: '621921693792',
  appId: '1:621921693792:web:878576c1d728b273545305',
  measurementId: 'G-GXGJS4RCG8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const sum = (a, b) => a + b;
