
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAihfDaXPkFg55muOccKVWn4lv6WxUuIiQ",
  authDomain: "website-absensi-2ec99.firebaseapp.com",
  projectId: "website-absensi-2ec99",
  storageBucket: "website-absensi-2ec99.firebasestorage.app",
  messagingSenderId: "163665378068",
  appId: "1:163665378068:web:e2e4324d06ec23f7f76001"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  app,
  auth,
  db,
  googleProvider
};
  
