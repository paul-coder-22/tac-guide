import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import SignInSide from './SignIn/SigninSide';
import Register from './SignIn/Register';
import Welcome from "./Welcome";

const auth = firebase.auth()
// const firestore = firebase.firestore()


function App() {

  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <SignInSide />} ></Route>
          <Route path="/register" element={<Register />} ></Route>
          <Route path="/dashboard" element={<Welcome />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
