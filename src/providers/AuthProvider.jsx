import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config.js';
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user using email and password
  const createUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //sign in with email and password

  const loginWIthEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
    
  }

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  //forget password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
  }
  //update user data 
  const updateUserData = (createdUser,name,photo) => {
    setLoading(true);
    return updateProfile(createdUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  //google provider 
  const googleProviderUser = () => {
    return signInWithPopup(auth, googleProvider);

  }


  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      return unsubscribe();
    }
  }, [])


  const authInfo = {
    user,
    loading,
    setLoading,
    createUserWithEmailPassword,
    loginWIthEmailPassword,
    logOut,
    forgetPassword,
    updateUserData,
    googleProviderUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}