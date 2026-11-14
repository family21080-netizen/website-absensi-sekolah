
import { auth, googleProvider } from "./firebase.js";

import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

// Login Google menggunakan popup
export async function loginGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Login Google gagal:", error);
    throw error;
  }
}

// Memantau status login
/**
 * Memantau perubahan status autentikasi.
 * @param {(user: import("https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js").User | null) => void} callback
 */
export function pantauLogin(callback) {
  return onAuthStateChanged(auth, callback);
}
// Logout
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout gagal:", error);
    throw error;
  }
}
