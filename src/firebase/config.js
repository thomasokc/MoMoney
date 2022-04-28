import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAjfPFZe1-C7zkazH9cA-DvBUQ5J8FmuDw",
    authDomain: "momoney-2a555.firebaseapp.com",
    projectId: "momoney-2a555",
    storageBucket: "momoney-2a555.appspot.com",
    messagingSenderId: "580205396437",
    appId: "1:580205396437:web:bd2129504e22cd986abd5c"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}