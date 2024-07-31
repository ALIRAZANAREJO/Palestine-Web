import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const dp = getFirestore(app);
const auth = getAuth(app);

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let Register_button = document.getElementById("Register_button");
let toggle_password = document.getElementById("toggle-password");
let toggle_confirm_password = document.getElementById("toggle-confirm-password");
let Register_form = document.getElementById("Register_form");

let registerUser = async (evt) => {
    evt.preventDefault();

    var object = {
        username: name.value,
        useremail: email.value,
        user_password: password.value,
        userCon_pass: confirm_password.value,
    };

    try {
        if (object.user_password === object.userCon_pass) {

            createUserWithEmailAndPassword(auth, object.useremail, object.user_password)
                .then(async (userCredential) => {
                    await   sendEmailVerification(userCredential.user);
                    const ref = doc(dp, "user_information", userCredential.user.uid);
                    await setDoc(ref, {
                        Name: object.username,
                        email: object.useremail,
                        profilePictureURL: "https://firebasestorage.googleapis.com/v0/b/q-a-database-bb349.appspot.com/o/green_picture.png?alt=media&token=90839950-ec70-4c76-af30-480fb10faf3d",
                    });

                    alert("please conform email verification link")
                    window.location.href ="/Palestine/palestine.html";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode);
                    alert(errorMessage);
                });

        } else {
            alert("Your password and confirm password do not match.");
        }
    } catch (error) {
        alert("An unexpected error occurred.");
        console.error(error);
    }
};

// Attach the submit event to the form, not the button
Register_form.addEventListener("submit", registerUser);

async function sendingVerifyEmail(user) {
    try {
        await user.sendEmailVerification();
        console.log("Verification email sent successfully.");
    } catch (error) {
        console.error("Error sending verification email:", error.message);
    }
}

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
toggle_confirm_password.addEventListener('click', function () {
    togglePassword('confirm-password');
});