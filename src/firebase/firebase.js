// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6ReFJ8_C0WORQBkpgw7Zs9ozH_AjLeLs",
  authDomain: "timesworld-mt.firebaseapp.com",
  projectId: "timesworld-mt",
  storageBucket: "timesworld-mt.appspot.com",
  messagingSenderId: "482665756481",
  appId: "1:482665756481:web:87d04b1b7eb1d6d38ed3c0",
  measurementId: "G-S07ZG6SJ2R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);