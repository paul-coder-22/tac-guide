import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyA550IhhQUewXKv_5or2f_ad7UsiX27fdw",
    authDomain: "tacguide-98860.firebaseapp.com",
    projectId: "tacguide-98860",
    storageBucket: "tacguide-98860.appspot.com",
    messagingSenderId: "576532751000",
    appId: "1:576532751000:web:58d461db528b0fa722a6ed",
    measurementId: "G-9VXGJKC088"
})


const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

const register = async ({ email, password }) => {
    const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
const login = async ({ email, password }) => {
    const res = await firebase.auth()
        .signInWithEmailAndPassword(email, password);
    return res.user;
}

export { auth, provider, register, login }