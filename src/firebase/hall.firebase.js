// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  // apiKey: 'AIzaSyDe8KXYjZUNmpPY3jV0naqwobe-wCNFRS4',
  // authDomain: 'hall-management-df538.firebaseapp.com',
  // projectId: 'hall-management-df538',
  // storageBucket: 'hall-management-df538.appspot.com',
  // messagingSenderId: '164903158410',
  // appId: '1:164903158410:web:1343bb23ea2ddb34bb2373',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
