import { signInWithGooglePopup , signInwithGoogleRedirect} from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
const SignIn =()=>{
   
const logGoogleUser = async() =>{
    const res=await signInWithGooglePopup();
    const {user}=res;
    const userDocRef= await createUserDocumentFromAuth(user);
}


    return(
        
        <div>
            sign in component
            <p/>
        <button onClick={logGoogleUser}> Sign In with popup</button>
        </div>
    )

}

export default SignIn