import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const creatUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("observing current user", currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () =>{
            unSubscribe();
        }

    },[])

    const authInfo ={
        user,
        creatUser,
        signInUser,
        logOut,
        loading
    }
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