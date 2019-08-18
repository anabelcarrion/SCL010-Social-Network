//login con goolge
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // esto devolvera una promesa
  firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      let userData = {
        uid: user.uid,
        fullName: user.displayName,
        email: user.email,
        authentication: "google",
      }
      const db = firebase.firestore();
      db.collection('users').get()
        .then((list) => {
          let authentication = false;
          list.forEach((doc) => {
            if (doc.data().authentication === "email" && doc.data().email === user.email) {
              authentication = true;
              alert("Usted esta auntentificado por email");
            }
          });
          if (!authentication) {
            saveUserToDatabaseAfterLogin(userData);
          }
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
    })
    .catch(err => {
      console.log(err);
    });
}

//salvando los datos en la base de datos de firebase
export const saveUserToDatabaseAfterLogin = (userData) => {
  const db = firebase.firestore();
  let docRef = db.collection('users').doc(userData.uid);
  docRef.get()
    .then(doc => {
      let user = {};
      if (!doc.exists) {
        docRef.set(userData);
        user = userData
      } else {
        user = doc.data();
      }
      localStorage.setItem('uid', user.uid);
      localStorage.setItem('fullName', user.fullName);
      localStorage.setItem('email', user.email);

      if (user.authentication === "google") {
        window.location.hash = '#/wall';
      }
    })
    .catch(err => {
      console.log('Error al obtener documento', err);
    });
};

export const handleSignUp = () => {
  let name = localStorage.getItem('name');
  let lastName = localStorage.getItem('lastName');
  let fullName = name + " " + lastName;
  let email = document.getElementById('email').value;
  let password;

  if (checkingPassword()) {
    password = document.getElementById('password').value;
  } else {
    alert("revisar contraseñas, no son iguales")
  }
  if (email.length < 4) {
    alert('Por favor introduzca una dirección de correo eléctronico.');
    return;
  }
  if (password.length < 4) {
    alert('Por favor ingrese una contraseña.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
      sendEmailVerification();
      saveUserToDatabaseAfterLogin({
        fullName: fullName,
        email: email,
        uid: data.user.uid,
        authentication: "email",
      })
      window.location.hash = '#/confirmation';
    })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('La contraseña es muy insegura..');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  // [END createwithemail]
}

/**
 * Sends an email verification to the user.
 */

export const sendEmailVerification = () => {
  // [START sendemailverification]
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    // Email Verification sent!
    // [START_EXCLUDE]
    alert('¡Verificación de correo electrónico enviada!');
    // [END_EXCLUDE]
  });
  // [END sendemailverification]
}

const checkingPassword = () => {
  let password = document.getElementById('password').value;
  let password1 = document.getElementById('password1').value;
  let checkingPassword;
  if (password === password1) {
    checkingPassword = true;
  } else {
    checkingPassword = false;
  }
  return checkingPassword;
}


export const signIn = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Por favor introduzca una dirección de correo eléctronico.');
    return;
  }
  if (password.length < 4) {
    alert('Por favor ingrese una contraseña.');
    return;
  }
  // Sign in with email and pass.
  // [START authwithemail]
  let db = firebase.firestore();
  let docRef = db.collection("users");
  docRef.get()
    .then(list => {
      list.forEach((doc) => {
        if (doc.data().email === email && doc.data().authentication === "google") {
          alert("Usted esta auntentificado por google, por favor ir a la pantalla de incio e iniciar seccion por google");
        } else if (doc.data().email === email && doc.data().authentication === "email") {
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              let currentUser = firebase.auth().currentUser;
              if (currentUser != null && currentUser.emailVerified) {
                let db2 = firebase.firestore();
                let docRef2 = db2.collection("users").doc(currentUser.uid);
                docRef2.get()
                  .then(doc => {
                    localStorage.setItem("fullName", doc.data().fullName);
                    window.location.hash = '#/wall';
                  });
              } else {
                alert("No está verificado el usuario");
                // console.log(firebase.auth().currentUser.emailVerified);
              }
            })
            .catch(function (error) {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              // [START_EXCLUDE]
              if (errorCode === 'auth/wrong-password') {
                alert('Contraseña incorrecta.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
              //document.getElementById('quickstart-sign-in').disabled = false;
              // [END_EXCLUDE]
            });
        }
      });
    });
  // [END authwithemail]
  //document.getElementById('quickstart-sign-in').disabled = true;
}
//f(x) de guardar y optener post
export const savePost = () => {
  var db = firebase.firestore();
  // colección creada
  db.collection("posts").add({
  post: document.getElementById('text-post').value,
  userId: firebase.auth().currentUser.uid,
  // time: new Date(),
  
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
};

export const getPost = () => {
  var db = firebase.firestore();
  db.collection("posts").where("userId", "==", firebase.auth().currentUser.uid)      //.orderBy("time", "desc").limit(20)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      let post=db.collection("posts");
      // post.orderBy("time","desc")
      console.log(doc.data())
      toConect(doc)
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
};

//Function to delete a document from posts collection
export const deletePost = (id) => {
let db = firebase.firestore();
db.collection("posts").doc(id).delete().then(function() {
  console.log("Document successfully deleted!");
}).catch(function(error) {
  console.error("Error removing document: ", error);
})
}
  

export const signOut = () => {
  //Ejuecutamos la salida mediante firebase auth
  firebase.auth().signOut().then(function () {
    //limpio las variables de uso
    localStorage.setItem('uid', '');
    localStorage.setItem('authentication', '');
    localStorage.setItem('email', '');
    localStorage.setItem('fullName', '');
    localStorage.setItem('password', '');

  }, function (error) {

    console.log(error);
  })
}
