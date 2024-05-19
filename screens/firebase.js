import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAP5aKnWs2POayk3xZNjJfbKtTsNSlQtjY",
  authDomain: "campershield-af185.firebaseapp.com",
  projectId: "campershield-af185",
  storageBucket: "campershield-af185.appspot.com",
  messagingSenderId: "896017261544",
  appId: "1:896017261544:web:6aeb63743959ff39083a5d"
};

// Initialize Firebase if it's not already initialized
const app = initializeApp(firebaseConfig);

// Get the Firebase Authentication instance
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firebase Storage
const storage = getStorage(app);

const db = getFirestore(app);

export { auth, db, storage };