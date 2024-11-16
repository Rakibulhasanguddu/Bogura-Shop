import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Useauth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default Useauth;