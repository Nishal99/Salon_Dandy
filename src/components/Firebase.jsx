// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCexHhpykUjr-2hnOzxkLsWuIioI_Nkq1w",
  authDomain: "salondandy-c41ae.firebaseapp.com",
  projectId: "salondandy-c41ae",
  storageBucket: "salondandy-c41ae.appspot.com",
  messagingSenderId: "193824333195",
  appId: "1:193824333195:web:950ad326ba9c89d249a38e"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
