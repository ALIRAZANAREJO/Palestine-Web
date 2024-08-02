import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

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
const storage = getStorage(app);

document.getElementById('signOutBtn').addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = 'index.html'; // Redirect to the login page after sign-out
  }).catch((error) => {
    console.error('Sign Out Error', error);
  });
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    const userDocSnap = await getDoc(userDoc);
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      document.getElementById('user_name').value = userData.username || user.displayName;
      document.getElementById('user_email').value = user.email;
      const profileImageUrl = userData.profileImageUrl || user.photoURL || 'default-profile.png';
      document.getElementById('profileImg').src = profileImageUrl;
      document.getElementById('user-image').src = profileImageUrl;
    } else {
      document.getElementById('user_name').value = user.displayName;
      document.getElementById('user_email').value = user.email;
      document.getElementById('profileImg').src = user.photoURL || 'default-profile.png';
      document.getElementById('user-image').src = user.photoURL || 'default-profile.png';
    }
  } else {
    window.location.href = 'index.html'; // Redirect to the login page if not authenticated
  }
});

document.getElementById('login_button').addEventListener('click', async () => {
  const user = auth.currentUser;
  if (user) {
    const username = document.getElementById('user_name').value;
    await updateProfile(user, { displayName: username });

    const userDoc = doc(db, 'users', user.uid);
    await setDoc(userDoc, { username }, { merge: true });
  }
});

document.getElementById('input_file').addEventListener('change', async (event) => {
  const user = auth.currentUser;
  if (user) {
    const file = event.target.files[0];
    const storageRef = ref(storage, 'profile_images/' + user.uid);
    await uploadBytes(storageRef, file);
    const profileImageUrl = await getDownloadURL(storageRef);

    await updateProfile(user, { photoURL: profileImageUrl });
    const userDoc = doc(db, 'users', user.uid);
    await setDoc(userDoc, { profileImageUrl }, { merge: true });

    document.getElementById('profileImg').src = profileImageUrl;
    document.getElementById('user-image').src = profileImageUrl;
  }
});
document.getElementById('backDiv').addEventListener('click', function() {
  window.location.href = 'index.html';
});