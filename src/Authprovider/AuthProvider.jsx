import {  createContext,  useEffect,  useState } from "react";
import { app } from "../product/Authentication/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext()
const auth = getAuth(app)

export const AuthProvider = ({Children}) => {
    const [user, setUser]=useState(null)
    const [Loading,setLoading]=useState(true)
    const googleprovider = new GoogleAuthProvider();

    const  creatuser = (email,password)=>{
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
    };
    const login =(email,password)=>{
        setLoading(true);
      return  signInWithEmailAndPassword(auth,email,password)
    };
    const logout =()=>{
        setLoading(true);
       return signOut(auth)
    };
    const google =()=>{
      return signInWithPopup(auth,googleprovider)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, creatuser => {
            console.log('user in the auth state changed', creatuser);
            setUser(creatuser);
            setLoading(false);
                
        });
        return () => {
           return unSubscribe();
        }
      }, [])
const authinfo={
    user,
    Loading,
    setUser,
    creatuser,
    login,
    logout,
    google
}

    return (
     
     <AuthContext.Provider value={authinfo}>
       {Children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;