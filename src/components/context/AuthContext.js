import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut , onAuthStateChanged} from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
const UserContext =  createContext()



export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        signOut(auth)
    } 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    return(
        <UserContext.Provider value={{ createUser , signIn , user , logOut}}>
            {children}
        </UserContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(UserContext)
}