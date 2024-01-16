import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIW_LAs7n5kasnVB-YR_dcbafc8flycmU",
  authDomain: "olx-app-3db89.firebaseapp.com",
  projectId: "olx-app-3db89",
  storageBucket: "olx-app-3db89.appspot.com",
  messagingSenderId: "383782072554",
  appId: "1:383782072554:web:5d923000ee36fbff61a793",
  measurementId: "G-JHK2YVMC9E"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


async function SignUp(userInfo) {

  try {
    const { email, password, age, fullName } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      fullName,
      age,
      email,
    })
    alert('Successfully SignUp');
  } catch (e) {
    alert(e.message);
  };
}

async function login(userInfo) {
  try {
    const { email, password } = userInfo;

    await signInWithEmailAndPassword(auth, email, password);
    alert("logged in Successfully");
  } catch (e) {
    alert(e.message);
  };
}

export {
  SignUp,
  login
}