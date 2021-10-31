import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

  
  initializeAuthentication();
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
  
    const signInUsingGoogle = () => {
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
    };
  
    const signInUsingFacebook = () => {
      setIsLoading(true);
      const facebookProvider = new FacebookAuthProvider();
      return signInWithPopup(auth, facebookProvider);
    };
    //observe user state changed
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
    }, []);
  
    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    };
    return {
      user,
      isLoading,
      auth,
      signInUsingGoogle,
      signInUsingFacebook,
      logOut
    };
  };
  
  export default useFirebase;
  