import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../auth/firebase";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredential;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (response) => {
      console.log(response);
      setUser(response);
      setLoading(false);
    });
    return () => {
      unsubscribe(); //cleanup
    };
  }, []);
  const logOut = () => {
    signOut(auth);
  };
  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
