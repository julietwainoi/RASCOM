// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signInWithPopup,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBu7ow3Sa_niFT7xH50fKVrBWVLKJBefMU",
    authDomain: "royalbustani-3ea13.firebaseapp.com",
    projectId: "royalbustani-3ea13",
    storageBucket: "royalbustani-3ea13.appspot.com",
    messagingSenderId: "540706047243",
    appId: "1:540706047243:web:47d3dacb90fff64fdc8e0e",
    measurementId: "G-NLEG1VT0W8"
};



const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
const auth = getAuth();


const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
    "confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

var email,
    password,
    signupEmail,
    signupPassword,
    confirmSignupEmail,
    confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if (signupEmail != confirmSignupEmail) {
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (signupPassword != confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    if (
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmSignUpPassword == null
    ) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    if (isVerified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                // ...
                window.alert("Success! Account created.");
                window.location = "./createTask.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                window.alert("Error occurred. Try again.");
                window.alert(errorMessage);
            });
    }
});

submitButton.addEventListener("click", function () {
    email = emailInput.value;
    // console.log(email);
    password = passwordInput.value;
    // console.log(password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            window.alert("Success! Welcome back!");
            window.location = "./createTask.html";

            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            window.alert("Error occurred. Try again.");
        });
});

/*const signInWithGoogle = () => {
    //THE POP-UP METHOD
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;

            window.alert("Success! Welcome back " + user.displayName);
            window.location = "./dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);
        });
};*/

//signInWithGoogle.addEventListener("click", signInWithGoogle);

signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
    main.style.display = "block";
    createacct.style.display = "none";
});  
