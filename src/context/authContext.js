import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/firebase.config";
import { helpHttp } from "../utils/helpHttp";
import { baseApiUrl } from "../utils/keysSession";
// import { auth } from "../services/firebase.config";

const AuthContext = createContext({});
const { post } = helpHttp();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [tools, setTools] = useState([]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const googleLogOut = () => {
    signOut(auth);
  };

  // useEffect(() => {
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      // let user = {
      //   user_name: currentUser?.displayName,
      //   user_email: currentUser?.email,
      //   user_account_id: currentUser?.uid,
      // };

      // if (user.user_name) {
      //   console.log("dentro del if");
      //   post(`${baseApiUrl}/auth`, {
      //     user_email: user.user_email,
      //     user_account_id: user.user_account_id,
      //   })
      //     .then((res) => {
      //       setUser({
      //         ...user,
      //         ...res.data?.user,
      //         token: res.data?.token,
      //       });
      //     })
      //     .catch((err) => {
      //       // throw new Error(err);
      //     });
      // }

      setUser({ user_name: "nombre estatico" });
    });

    return () => {
      unSuscribe();
    };
  }, []);
  // if (!currentUser.email) {
  //   return setData({ ...data, user: {} });
  // }

  // let user;
  // console.log("peticion google");
  // post(`${baseApiUrl}/auth`, {
  //   body: {
  //     email: currentUser?.email,
  //     uid: currentUser?.uid,
  //   },
  // }).then((res) => {
  //   user = res;
  // });

  // setData({ ...data, user });
  // setLocalStorage(dataKey, user);
  // });

  // return () => {
  //   unSuscribe();
  // };
  // }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, googleLogOut, user, tools, setTools }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const DataAuth = () => useContext(AuthContext);
