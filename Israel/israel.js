const headlines = [
  "The Israeli Declaration of Independence, formally the Declaration of the Establishment of the State of Israel(Hebrew: הכרזה על הקמת מדינת ישראל),was proclaimed on 14 May 1948 (5 Iyar 5708) by David Ben-Gurion, the Executive Head of the World Zionist Organization,Chairman of the Jewish Agency for Palestine, and soon to be first Prime Minister of Israel...",
  "It declared the establishment of a Jewish state in Eretz-Israel, to be known as the State of Israel, which would come into effect on termination of the British Mandate at midnight that day.The event is celebrated annually in Israel as Independence Day, a national holiday on 5 Iyar of every year according to the Hebrew calendar."
];

let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

function updateHeadline() {
  const headlineContainer = document.getElementById("headlineContainer");
  const headline = headlines[currentIndex];

  if (isAdding) {
    const partialHeadline = headline.substr(0, wordIndex + 1);
    headlineContainer.textContent = partialHeadline;
    wordIndex++;
    if (wordIndex > headline.length) {
      isAdding = false;
    }
  } else {
    const partialHeadline = headline.substr(0, wordIndex);
    headlineContainer.textContent = partialHeadline;
    wordIndex--;
    if (wordIndex < 0) {
      isAdding = true;
      currentIndex = (currentIndex + 1) % headlines.length;
    }
  }
}

setInterval(updateHeadline, 80);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

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
const storage = getStorage(app);

document.getElementById('signOutBtn').addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = '/Profile/profile.html'; // Redirect to the login page after sign-out
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
      // document.getElementById('user_name').value = userData.username || user.displayName;
      // document.getElementById('user_email').value = user.email;
      const profileImageUrl = userData.profileImageUrl || user.photoURL || 'default-profile.png';
      // document.getElementById('profileImg').src = profileImageUrl;
      document.getElementById('user-image').src = profileImageUrl;
    } else {
      // document.getElementById('user_name').value = user.displayName;
      // document.getElementById('user_email').value = user.email;
      // document.getElementById('profileImg').src = user.photoURL || 'default-profile.png';
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

    document.getElementById('user-image').src = profileImageUrl;
  }
});


