
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC60Mlfk67oTcKmxHUID-Ie700TJ3fUbBc",
  authDomain: "weatherapp-d1762.firebaseapp.com",
  projectId: "weatherapp-d1762",
  storageBucket: "weatherapp-d1762.appspot.com",
  messagingSenderId: "168225866519",
  appId: "1:168225866519:web:c593502be64ddc5614ad52",
  measurementId: "G-3L2PPPQN1F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);