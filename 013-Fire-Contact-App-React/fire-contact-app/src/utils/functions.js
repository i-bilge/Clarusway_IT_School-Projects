// Import Admin SDK
const { getDatabase, ref, push, set } = require('firebase/database');

// Get a database reference to our blog
export const addInfo = (info) => {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    const newUsersRef = push(usersRef);
    set( newUsersRef,{
  name:info.name,
  tel:info.tel,
  gender:info.gender
  })
}