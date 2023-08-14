import { signInWithGooglePopup , signInwithGoogleRedirect} from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
const SignIn =()=>{

    const logGoogleRedirect =async() =>{
        const response = await getRedirectResult(auth);
        console.log(response);
        let userDocRef =null;
        if(response)
        {
            userDocRef=await createUserDocumentFromAuth(response.user);
        }
        return (userDocRef);

}
    useEffect(()=>{
    logGoogleRedirect();
    },[]);
    
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
        <button onClick={signInwithGoogleRedirect}> Sign In with Redirect</button>
        </div>
    )

}

export default SignIn