import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../../firebase/tourist.firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // register by create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // varify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // login after register
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log( currentUser );
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    providerLogin,
    createUser,
    verifyEmail,
    login,
    logOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
