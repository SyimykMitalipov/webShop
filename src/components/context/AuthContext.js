import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut , onAuthStateChanged} from "firebase/auth";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const UserContext =  createContext()


export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState()
    const history = useHistory()


    const createUser = (email, password) => {
         createUserWithEmailAndPassword(auth,email,password)
        history.push('/')
    }
    const signIn = (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
       history.push('/')


    }
    const logOut = () => {
        signOut(auth)
        window.location.reload()
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