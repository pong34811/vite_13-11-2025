import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2SMeDlw7Wsp16Hpgjxn9c4Jtf8hIOoQY",
  authDomain: "dreamlight-finance.firebaseapp.com",
  databaseURL: "https://dreamlight-finance-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dreamlight-finance",
  storageBucket: "dreamlight-finance.firebasestorage.app",
  messagingSenderId: "337535714725",
  appId: "1:337535714725:web:8cc724e1817f10efab544c",
  measurementId: "G-CP1BL7N60W"
};

const app = initializeApp(firebaseConfig);

// Export the Database instance as 'db' (This fixes your error)
export const db = getDatabase(app);

