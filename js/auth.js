
import { auth, googleProvider } from "./firebase.js";

import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

// Meminta Google menampilkan pilihan akun saat proses login.
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export async function loginGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login Google gagal:", error);
    throw error;
  }
}

export function pantauLogin(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout gagal:", error);
    throw error;
  }
}
