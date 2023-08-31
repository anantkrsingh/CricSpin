import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAmluZ7iPea9IQ_yyK-0NvVj3bsSSfRZX0",
    authDomain: "cricspin-2183f.firebaseapp.com",
    projectId: "cricspin-2183f",
    storageBucket: "cricspin-2183f.appspot.com",
    messagingSenderId: "1040123982065",
    appId: "1:1040123982065:web:466cbb95639477d8e07950",
    measurementId: "G-P4YGS55J19"
  };

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app);
export const db = getDatabase(app);
