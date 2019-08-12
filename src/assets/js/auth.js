export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  // esto devolvera una promesa
  firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      let userData = {
        uid: user.uid,
        fullName: user.displayName,
        email: user.email,
      } 
      saveUserToDatabaseAfterLogin(userData);
    })
    .catch(err => {console.log(err);});
}

//salvando los datos en la base dr dato de firebasa despues de logiarse con google
const saveUserToDatabaseAfterLogin = (userData) => {
  const db = firebase.firestore();
  let docRef = db.collection('users').doc(userData.uid);
  docRef.get()
  .then(doc => {
    if (!doc.exists) {
          docRef.set({
        uid: userData.uid,
        fullName: userData.fullName,
        email: userData.email,
      });
    }
      sessionStorage.setItem('uid', doc.data().uid);
      sessionStorage.setItem('fullName', doc.data().fullName);   
      sessionStorage.setItem('email', doc.data().email);   
      window.location.hash = '#/wall';
    })
  .catch(err => {
    console.log('Error getting document', err);
  }); 
};