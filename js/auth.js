
import { auth, googleProvider } from "./firebase.js";

import {
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

/**
 * Login menggunakan akun Google.
 */
export async function loginGoogle() {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error("Login Google gagal:", error);
    throw error;
  }
}

/**
 * Memeriksa hasil login setelah kembali dari Google.
 */
export async function periksaLogin() {
  try {
    return await getRedirectResult(auth);
  } catch (error) {
    console.error("Pemeriksaan login gagal:", error);
    throw error;
  }
}

/**
 * Memantau status login pengguna.
 * @param {(user: import("https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js").User | null) => void} callback
 */
export function pantauLogin(callback) {
  return onAuthStateChanged(auth, callback);
}

/**
 * Keluar dari akun.
 */
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout gagal:", error);
    throw error;
  }
}
