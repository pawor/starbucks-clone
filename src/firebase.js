import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDOSSLXymjEQlY8OHBSfHlZzGDkt9R1OAo",
    authDomain: "starbucks-clone-fe327.firebaseapp.com",
    projectId: "starbucks-clone-fe327",
    storageBucket: "starbucks-clone-fe327.appspot.com",
    messagingSenderId: "689642563122",
    appId: "1:689642563122:web:d1e963aba8fe04e512be2b"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }