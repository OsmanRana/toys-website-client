import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
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
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setAuthError(error.message);
          });
        saveUser(email, name);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  const userSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
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
      } else {
        setUser({});
      }
    });
  }, [auth]);

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://whispering-basin-27213.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return {
    signUpUserWithEmailAndPassword,
    authError,
    user,
    userSignIn,
    logOut,
  };
};
export default useFirebase;
