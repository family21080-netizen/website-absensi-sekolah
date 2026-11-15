import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

onAuthStateChanged(auth, (pengguna) => {
  if (pengguna) {
    console.log("UID akun:", pengguna.uid);
  } else {
    console.log("Belum ada akun yang masuk.");
  }
});
