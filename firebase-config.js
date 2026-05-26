// ═══════════════════════════════════════════════════
// FIREBASE KONFIGURATION
// Diese Datei einmal ausfüllen — gilt für beide Apps
// Werte findest du in der Firebase Console unter:
// Projekteinstellungen → Deine Apps → Firebase SDK
// ═══════════════════════════════════════════════════
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJOK4mOb5HzHDNlenzJe87kDCY2ZKdeEw",
  authDomain: "bestellungballoni.firebaseapp.com",
  projectId: "bestellungballoni",
  storageBucket: "bestellungballoni.firebasestorage.app",
  messagingSenderId: "447268676791",
  appId: "1:447268676791:web:f89b0dd93fc8e731f35932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// SumUp Konfiguration
const SUMUP_CONFIG = {
  apiKey: "DEIN_SUMUP_API_KEY", // aus dem SumUp Developer Portal
  merchantCode: "DEIN_MERCHANT_CODE"
};

// Admin PIN (bitte ändern!)
const ADMIN_PIN = "1234";

// App-Einstellungen
const APP_CONFIG = {
  ladenName: "BALLONI",
  ladenOrt: "Köln-Ehrenfeld",
  tagesnummerReset: true, // true = täglich neu bei 1 starten
};
