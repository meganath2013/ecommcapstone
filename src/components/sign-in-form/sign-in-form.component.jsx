import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import '../button/button.styles.scss'
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const defaultFormFields={email:'',password:''}
const SignInForm = () =>{

    

    
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email,password}=formFields;
    //console.log(formFields);
    

    const resetForm =()=>{
        setFormFields(defaultFormFields)
    };


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
          
       };


    const handleSubmit =async(event) =>
    {
        event.preventDefault();

      
        try{
            await signInAuthWithEmailAndPassword(email, password)
            resetForm();

        }catch(error)
    
        {
            switch(error.code){

            case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
            case 'auth/user-not-found':
                alert ('user not associated with email');
                break;
            default:
                console.log('user login error', error);
            }
        }

            
    }
    const handleChange =(event) =>{
        const {name,value} =event.target;
        setFormFields({...formFields,[name]:value})

    };
    return(
        <div className='sign-up-container'>
            <h2> Already Have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit} >
                
                <FormInput label='Email' type="email" onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="password" onChange={handleChange} name='password' value={password}/>
                
                <div className='buttons-container'>
                <Button type='submit' onSubmit={handleSubmit}> Sign In</Button>

                <Button buttonType='google'  type='button' onClick={signInWithGoogle}> Google Sign-In</Button>
                </div>
                </form>
            
        </div>
    );
};
export default SignInForm