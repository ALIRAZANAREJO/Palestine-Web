import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, getDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU1hAfS6lBhqUEqkojudb9wxeMhfm1KSU",
  authDomain: "noted-door-402706.firebaseapp.com",
  databaseURL: "https://noted-door-402706-default-rtdb.firebaseio.com",
  projectId: "noted-door-402706",
  storageBucket: "noted-door-402706.appspot.com",
  messagingSenderId: "1061156658421",
  appId: "1:1061156658421:web:a2db8c244c8b3698f2b9bc",
  measurementId: "G-BN6E8PC088"
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