import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3CrbbLhAgrNESnJoC8lloAfX_4Xf50CU",
  authDomain: "chatgpt-ead9f.firebaseapp.com",
  projectId: "chatgpt-ead9f",
  storageBucket: "chatgpt-ead9f.appspot.com",
  messagingSenderId: "224796208977",
  appId: "1:224796208977:web:fe57503e888ed1049d6d70",
  measurementId: "G-KPK6H93WFB",
};
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
