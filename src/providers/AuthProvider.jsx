import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const CreateUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentLoggedInUser) => {
      setLoading(false);
      setUser(currentLoggedInUser);
      console.log("Current User: ", currentLoggedInUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUserWithEmail,
    CreateUserWithGoogle,
    logInUser,
    updateUserProfile,
    logOutUser,
    user,
    loading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
