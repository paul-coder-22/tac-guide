import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import SignInSide from './SignIn/SigninSide';
import SignUp from './SignIn/SignUp';
import Welcome from "./Dashboard/Welcome";
import Register from './Dashboard/Register';

const auth = firebase.auth()
// const firestore = firebase.firestore()


function App() {

  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={user ? <Navigate to="register" /> : <SignInSide />} />
          <Route path="signup" element={<SignUp />} ></Route>
          <Route path="dashboard" element={<Welcome />} ></Route>
          <Route path="register" element={<Register />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
