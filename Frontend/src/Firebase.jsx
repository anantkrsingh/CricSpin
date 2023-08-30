import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCC0H49d0K67yGYvprPf_5TSrzQG5-j3TE",
    authDomain: "test-16408.firebaseapp.com",
    databaseURL: "https://test-16408-default-rtdb.firebaseio.com",
    projectId: "test-16408",
    storageBucket: "test-16408.appspot.com",
    messagingSenderId: "279255768738",
    appId: "1:279255768738:web:92af83f7e8f7db84fe81fb",
    measurementId: "G-H4SEF02R65"
};

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app);
export const db = getDatabase(app);
