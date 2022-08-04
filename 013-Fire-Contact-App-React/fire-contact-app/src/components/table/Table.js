import React, { useRef, useEffect, useState } from 'react'
import { addInfo } from '../../utils/functions'
import app from '../../utils/firebase'
import {collection, doc, onSnapshot, query, querySnapshot} from 'firebase/firestore'
// import {db} from '../../utils/functions'

const Table = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   onSnapshot(query(collection(addInfo.db, "users")), (querySnapshot) => {
  //     const userInfoArray = querySnapshot.docs.map((doc) =>({id:doc.id, data:doc.data(),
  //     }));
  //     setUsers(userInfoArray);
  //   });
  // }, []);
  // console.log("contacts: ", users)
  return (
    <div className="contactTable">
          {/* {users.map((contact => (
            <p key={contact.id}>{contact.data.name}</p>
          )))}
          {users.map((contact => (
            <p key={contact.id}>{contact.data.tel}</p>
          )))}
          {users.map((contact => (
            <p key={contact.id}>{contact.data.gender}</p>
          )))} */}
          CONTACTS
    </div>
  );
}

export default Table