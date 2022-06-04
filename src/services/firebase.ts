import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB3Xwp0RVPwq5E2C9GqHxKvNAdmD9I5tjE",
  authDomain: "plexidata-1ce18.firebaseapp.com",
  projectId: "plexidata-1ce18",
  storageBucket: "plexidata-1ce18.appspot.com",
  messagingSenderId: "563380343844",
  appId: "1:563380343844:web:24ed32984b3cf3d24434b1",
  measurementId: "G-FHGWQW2511"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app);
export const storage = getStorage(app);   