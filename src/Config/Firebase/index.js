import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword    } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIW_LAs7n5kasnVB-YR_dcbafc8flycmU",
  authDomain: "olx-app-3db89.firebaseapp.com",
  projectId: "olx-app-3db89",
  storageBucket: "olx-app-3db89.appspot.com",
  messagingSenderId: "383782072554",
  appId: "1:383782072554:web:5d923000ee36fbff61a793",
  measurementId: "G-JHK2YVMC9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAnalytics(app);

function signUp(userInfo){
    const {email , password} = userInfo

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

function login(userInfo){
    const {email , password} = userInfo;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert('Login successfully')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage)
    });
}

export {
    login,
    signUp
}