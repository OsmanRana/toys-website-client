import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Pages/Authentication/Firebase/firebaseInit";

firebaseInitialization();

const useFirebase = () => {
  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState([]);
  const auth = getAuth();

  const signUpUserWithEmailAndPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const logInWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);
  return {
    signUpUserWithEmailAndPassword,
    authError,
    user,
    logInWithEmailAndPassword,
    logOut,
  };
};
export default useFirebase;
