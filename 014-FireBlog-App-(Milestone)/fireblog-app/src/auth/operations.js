import {
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    Timestamp,
  } from "firebase/firestore";
  import {db} from "./firebase";
  
  export const createContact = async (userInfo) => {
    await addDoc(collection(db, "contacts"), {
      ...userInfo,
      created: Timestamp.now(),
    });
  };
  export const updateContact = async (user) => {
    const contactRef = doc(db, "contacts", user.id);
    await updateDoc(contactRef, {...user, updated: Timestamp.now()});
  };
  
  export const deleteContact = async (id) => {
    await deleteDoc(doc(db, "contacts", id));
  };