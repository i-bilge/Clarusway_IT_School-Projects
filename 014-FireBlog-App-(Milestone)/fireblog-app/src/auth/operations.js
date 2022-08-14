import {
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    collection,
    Timestamp,
  } from "firebase/firestore";
  import {auth, db} from "./firebase";
  
  export const createContact = async (userInfo) => {
    await addDoc(collection(db, "contacts"), {
      ...userInfo,
      created: Timestamp.now(),
      creator: auth.currentUser.displayName
    });
  };
  export const updateContact = async (user) => {
    const contactRef = doc(db, "contacts", user.id);
    await updateDoc(contactRef, {...user, updated: Timestamp.now()});
  };
  
  export const deleteContact = async (id) => {
    try{
      const res = await deleteDoc(doc(db, "contacts", id));
      console.log(res)
    }
    catch(error){console.log(error)}
    
  };