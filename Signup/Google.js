import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, getDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDnnWOWzcakwk5j78HDU7m2teW5xaBIR0",
  authDomain: "login-form-31f15.firebaseapp.com",
  databaseURL: "https://login-form-31f15-default-rtdb.firebaseio.com",
  projectId: "login-form-31f15",
  storageBucket: "login-form-31f15.appspot.com",
  messagingSenderId: "869324969611",
  appId: "1:869324969611:web:d7294ad740cfa82f4f268e",
  measurementId: "G-QFN454B34Y"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();



const google_button = document.getElementById('google_button');
google_button.addEventListener("click", async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    console.log(user.email);

    const profilePictureURL = user.photoURL;

    const userDocRef = doc(db, "user_information", user.uid);
    await setDoc(userDocRef, {
      Name: user.displayName,
      email: user.email,
      profilePictureURL: profilePictureURL
    });

    window.location.href = "/Palestine/palestine.html";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
});