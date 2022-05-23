import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDF6cSdqo0wL74lnR86jKLzAxt4f-3FpLg",
  authDomain: "marley-electronics.firebaseapp.com",
  projectId: "marley-electronics",
  storageBucket: "marley-electronics.appspot.com",
  messagingSenderId: "672588804056",
  appId: "1:672588804056:web:287cd5538862d49739ccad"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth