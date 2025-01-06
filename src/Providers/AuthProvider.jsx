import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword,  } from "firebase/auth";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const creatUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("observing current user", currentUser);
        });
        return () =>{
            unSubscribe();
        }

    },[])
    const authInfo ={user,creatUser,signInUser}
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes ={
    children:PropTypes.node
}