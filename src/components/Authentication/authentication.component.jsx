import { signInWithGooglePopup , signInwithGoogleRedirect} from "../../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import './authentication.styles.scss'
import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-form.component";
const Authentication =()=>{
   



    return(
        
        <div className="authentication-container"> 
        {/* <button onClick={logGoogleUser}> Sign In with popup</button> */}
        
        <SignInForm/>
        <SignUpForm/>
        </div>

    )

}

export default Authentication