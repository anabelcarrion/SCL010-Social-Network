/* Funciones relacionadas con autentificación de usuari@s */

export const loginGoogle = () => {
    // console.log('Login con Google OK');
    const provider = new firebase.auth.GoogleAuthProvider();
  
    // this will return a promise
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        // console.log("Hola", user.displayName);
        let userName = splitGoogleDisplayName(user.displayName);
        saveUserToDatabaseAfterLogin(user.uid, userName.firstName, userName.lastName, user.email);
        // console.log(saveUserToDatabaseAfterLogin());
        })
      .catch(err => {
        console.log(err);
      })
  }
  
  const splitGoogleDisplayName = (displayName) => {
    var splitDisplayNameArray = displayName.split(" ");
    let userName = {
      firstName: splitDisplayNameArray[0],
      lastName: splitDisplayNameArray[1],
    }
  
    return userName;
  }
  
  const saveUserToDatabaseAfterLogin = (uid, firstName, lastName, email) => {
    console.log(uid, firstName, lastName, email);
  };
