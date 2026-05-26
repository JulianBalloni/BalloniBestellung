// ═══════════════════════════════════════════════════
// FIREBASE KONFIGURATION
// Diese Datei einmal ausfüllen — gilt für beide Apps
// Werte findest du in der Firebase Console unter:
// Projekteinstellungen → Deine Apps → Firebase SDK
// ═══════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "DEIN_API_KEY",
  authDomain:        "DEIN_PROJEKT.firebaseapp.com",
  databaseURL:       "https://DEIN_PROJEKT-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "DEIN_PROJEKT",
  storageBucket:     "DEIN_PROJEKT.appspot.com",
  messagingSenderId: "DEINE_SENDER_ID",
  appId:             "DEINE_APP_ID"
};

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
