import {  createContext,  useEffect,  useState } from "react";
import { app } from "../product/Authentication/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
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
      const unSubscribe = onAuthStateChanged(auth, currentuser => {
          console.log('user in the auth state changed', currentuser);
          setUser(currentuser);
          // setLoading(false);
          if(creatuser){
            axios.post(`http://localhost:4000/authentication`,{
              email:currentuser.email,
            }).then(data=>{
              if(data.data){
                localStorage.setItem("access-token",data?.data?.token);
                setLoading(false)
              }
            })
          }
          else{
            localStorage.removeItem("access-token");
            setLoading(false)
          }
      });
      return () => {
          unSubscribe();
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