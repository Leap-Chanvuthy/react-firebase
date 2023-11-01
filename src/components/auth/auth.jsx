import { useState } from "react";
import {auth , googleProvider} from "../../firebase/firebase";
import { createUserWithEmailAndPassword , signInWithPopup , signOut} from "firebase/auth";


const Auth = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    console.log(auth?.currentUser?.photoURL);

    // sign in with email and password
    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth , email , password);
        }
        catch(error){
            console.log(error);
        }
    }
    
    // sign in with google
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth , googleProvider);
        }
        catch(error){
            console.log(error);
        }
    }
    
    // logout 
    const logOut = async () => {
        try{
            await signOut(auth);
        }
        catch(error){
            console.log(error);
        }
    }

    return ( 
        <div>
            <input 
            type="email"
            placeholder="Email..." 
            onChange={((e) => setEmail(e.target.value) )}
             />
            <input 
            type="password" 
            placeholder="Password..." 
            onChange={((e) => setPassword(e.target.value))}
            />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logOut}>Logout</button>
        </div>
     );
}
 
export default Auth;