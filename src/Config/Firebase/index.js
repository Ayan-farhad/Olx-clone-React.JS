import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, collection, addDoc , getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


const SignUp = async (userInfo) => {
  try {
    const { email, password, age, fullname } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password, fullname)
    await addDoc(collection(db, 'users'), {
      fullname,
      age,
      email
    });

    alert('Successfully Register');
    return true;
  } catch (e) {
    alert(e.message);
    return e
  };

};

const login = async (userInfo) => {
  console.log("🚀 ~ login ~ userInfo:", userInfo)

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

const postData = async (userInfo) => {
  console.log("🚀 ~ postData ~ userInfo:", userInfo)
  try {
    const { productName, price, description, image } = userInfo;

    const storageRef = ref(storage, `ads/${image.name}`);
    await uploadBytes(storageRef , image)
    alert('image uploaded successfully')

    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, 'Ads'), {
      productName,
      price,
      description,
      imageUrl:url
    });

    alert('Successfully Post Ad');
    return true;
  } catch (e) {
    alert(e.message);
    return e
  };
}

async function getAds() {
  const querySnapshot = await getDocs(collection(db, 'Ads'));

  const ads = [];
  querySnapshot.forEach((doc) => {
      const ad = doc.data();
      ad.id = doc.id;

      ads.push(ad)
  });

  return ads;
}

export {
  SignUp,
  login,
  postData,
  getAds
};