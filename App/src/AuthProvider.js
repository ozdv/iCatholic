import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { getApps, initializeApp } from "firebase/app";

// ----- FIREBASE CONFIG -----
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
};

if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}
const db = getFirestore(initializeApp(firebaseConfig));

const AuthContext = createContext();
const AuthProvider = (props) => {
    const auth = getAuth();
    // user null = loading
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkLogin();
    }, []);

    function checkLogin() {
        onAuthStateChanged(auth, (u) => {
            if (u) {
                setUser(true);
                // getUserData();
            } else {
                setUser(false);
                // setUserData(null);
            }
        });
    }

    return (
        <AuthContext.Provider
            value={{
                user,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

console.log("getApps().length", getApps().length);
// const users = () => {
//     const [users, setUsers] = useState([]);
//     const usersCollectionRef = collection(db, "users");
//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(usersCollectionRef);
//             setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//         };
//         getUsers();
//     }, []);
//     console.log("users", users);
// };

export { AuthContext, AuthProvider };
