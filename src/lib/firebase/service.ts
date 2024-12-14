import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

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
