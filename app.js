import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const dp = getFirestore(app);


let email = document.getElementById("email");
let password = document.getElementById("password");
let toggle_password = document.getElementById("toggle-password1");
let login_form = document.getElementById("login_form");

let login_here = async evt => {
    evt.preventDefault();

    var object = {
        useremail: email.value,
        user_password: password.value,
    };

    try {
        if (object.user_password.length > 6) {
            signInWithEmailAndPassword(auth, object.useremail, object.user_password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    console.log("User logged in:", user);


                    var ref = doc(dp, "user_information", user.uid);
                    const docsnap = await getDoc(ref);

                    if (docsnap.exists()) {
                        const userName = docsnap.data().Name;
                        alert("Welcome, " + userName);
                        sessionStorage.setItem("user-info", JSON.stringify({
                            Name: userName
                        }));
                    }
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            window.location.href = "/Palestine/palestine.html";
                            console.log("welcom")
                        }
                    })
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert(errorCode);
                            alert(errorMessage);
                        });
                } else {
                    alert("Password should be at least 6 characters long.");
                }
    } catch (error) {
            alert("An unexpected error occurred.");
            console.error(error);
        }
    }


login_form.addEventListener("submit", login_here);




function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = passwordInput.nextElementSibling.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
    eyeIcon.classList.toggle('ri-eye-off-fill');
    eyeIcon.classList.toggle('ri-eye-fill');
}

toggle_password.addEventListener('click', function () {
    togglePassword('password');
})