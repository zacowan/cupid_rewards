import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzD5F0aezkshTIAxrapFzPy5SYeWsuxYo",
  authDomain: "cupid-rewards.firebaseapp.com",
  projectId: "cupid-rewards",
  storageBucket: "cupid-rewards.appspot.com",
  messagingSenderId: "697371451117",
  appId: "1:697371451117:web:f2edbc9cbb8869315476e4",
};

firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === "development") {
  const auth = firebase.auth();
  auth.useEmulator("http://localhost:9099");
  const store = firebase.firestore();
  store.useEmulator("localhost", 8080);
}
