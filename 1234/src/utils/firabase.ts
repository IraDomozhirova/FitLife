import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDK9FgceFv_PcORgD9iWkx3VwIJCDfw2HY",
  authDomain: "fitlife-837ae.firebaseapp.com",
  projectId: "fitlife-837ae",
  storageBucket: "fitlife-837ae.appspot.com",
  messagingSenderId: "1033467712914",
  appId: "1:1033467712914:web:7118a7979a718957471d4b",
  databaseURL: "https://fitlife-837ae-default-rtdb.europe-west1.firebasedatabase.app/"
};


const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp