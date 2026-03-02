import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBWkCO1IlwXClrNLrLwALlTigUBDQI2ETQ",
  authDomain: "nflix-2e599.firebaseapp.com",
  projectId: "nflix-2e599",
  storageBucket: "nflix-2e599.firebasestorage.app",
  messagingSenderId: "774154062195",
  appId: "1:774154062195:web:7c9647ddca70556a6edd06",
  measurementId: "G-G2WS3NFMJE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addDoc(collection(db, "user"), { uid: user.uid,
        name,
        authProvider: "local",
        email,
     });
    console.log("User signed up:", user);
  } catch (error){
    console.log("error", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.log("error", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
    throw error;
  }
};
const logout = () => {
    signOut(auth);
}
export { app, auth, db, signup, login, logout };