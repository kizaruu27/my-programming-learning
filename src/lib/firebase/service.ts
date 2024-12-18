import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

// Service menampung beberapa function yg akan dipanggil di endpoint

const firestore = getFirestore(app);

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};

// Testing
export const reRetrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    ...doc?.data(),
  }));

  return data;
};

export const retrieveDataById = async (collection: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collection, id));
  const data = snapshot.data();

  return data;
};

export const signIn = async (userData: { email: string }) => {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((data: any) => ({
    id: data.id,
    ...data.data(),
  }));

  if (data) return data[0];
  else return null;
};

export const signUp = async (
  userData: {
    email: string;
    username: string;
    password: string;
    role: string;
  },
  callback: Function
) => {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((data) => ({
    id: data.id,
    ...data.data(),
  }));

  if (data.length > 0) callback({ status: false, messege: "Email is already exist" });
  else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({ status: true, messege: "Register Success" });
      })
      .catch((error) => {
        callback({ status: false, messege: error.message });
      });
  }
};
