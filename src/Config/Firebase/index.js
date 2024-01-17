import { initializeApp } from "firebase/app";
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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


const SignUp = async (userInfo) => {
  try {
    const { email, password, age, fullname } = userInfo
    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, 'users'), {
      fullname,
      age,
      email
    });

    alert('Successfully Register');
  } catch (e) {
    alert(e.message);
  };

};

const login = async (userInfo) => {

  try {
    const { email, password } = userInfo;

    return await signInWithEmailAndPassword(auth, email, password).then(res => {
      console.log("🚀 ~ awaitsignInWithEmailAndPassword ~ res:", res);

      alert("logged in Successfully");
      return res
    })
  } catch (e) {
    alert(e.message);
    return e
  };
};

export {
  SignUp,
  login
};