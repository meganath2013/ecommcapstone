import { useState } from "react";
import { createAuthUserwithEmailandPassword , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields={displayName:'',email:'',password:'',confirmPassword:''}
 


const SignUpForm = () =>{



    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
    console.log(formFields);
    const resetForm =()=>{
        setFormFields(defaultFormFields)
    };
    const handleChange =(event) =>{
        const {name,value} =event.target;
        setFormFields({...formFields,[name]:value})

    };

    const handleSubmit =async(event) =>
    {
        event.preventDefault();
        if(password!==confirmPassword)
        {
            alert("Password Dont match");
            return;
        }
        try{
           
            const {user} = await createAuthUserwithEmailandPassword(email,password);
            console.log(user)
            
            await createUserDocumentFromAuth(user, {displayName});
            resetForm();

        }catch(error)
        {
            if (error.code==='auth/email-already-in-use')
            {
                alert("Email already in use")
            }
            else{
            console.log('user creation error', error)
            }
        }
    }
    return(
        <div className='sign-up-container'>
            <h2> Dont Have an account</h2>
            <span>Sign Up with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput label='Display Name' type="text" onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label='Email' type="email" onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="password" onChange={handleChange} name='password' value={password}/>
                <FormInput label='Confirm password' type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button buttonType='inverted' type='submit' onSubmit={handleSubmit}> Sign Up</Button>
            </form>
        </div>                                      
    );
}
export default SignUpForm