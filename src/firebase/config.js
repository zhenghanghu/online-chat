import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBuCMq-G3UyquAsV9zndxqcgPzAQng4eoo",
  authDomain: "memo-miaoplus.firebaseapp.com",
  projectId: "memo-miaoplus",
  storageBucket: "memo-miaoplus.appspot.com",
  messagingSenderId: "795370179971",
  appId: "1:795370179971:web:6b63dc4df4e97f77b87ab6"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
