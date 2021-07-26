import React, { useEffect, useState } from "react";
import firebase from '../firebase'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [userDetails,setUserDetails] = useState(null);

  const fetchUserDetails = async (e) => {
    var arr = e.split("@");
    // console.log(arr)
    var data;
    await firebase.db
    .collection("userDetails")
    .where("essNo", "==", arr[0])
    .get()
    .then((querySnapshot) => {
      data = querySnapshot.docs.map((doc) => doc.data());
      console.log("data: " + data[0].dependents);
      setUserDetails(data[0]);

      // console.log(userdetail[0].name);
    });
  }

  useEffect(() => {
    firebase.authreturns().onAuthStateChanged((user) => {
      setCurrentUser(user);
      fetchUserDetails(user.email);      
      setPending(false);
    });
  }, []);

//   if (pending) {
//     return <>Loading...</>;
//   }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userDetails
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
