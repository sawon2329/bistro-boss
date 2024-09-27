import React, { useState } from 'react';
import './createanaccount.css'
import createAccountCover from '../../assets/others/authentication2.png'
import createAccountBg from '../../assets/others/authentication.png'
import Thankyou from '../Thankyou/Thankyou';

import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { getFirestore,doc, setDoc } from 'firebase/firestore';


const CreateAnAccount = () =>{

    const auth = getAuth();
    const db = getFirestore()

    const [createUser,setCreateUser] = useState({
        emailLogin: false,
        displayName: '',
        email:'',
        password:''

    })

    const [error,setError] = useState('');

    console.log(createUser)


    const handelChange = (e) =>{
        const {name,value} = e.target;
        setCreateUser({...createUser,[name]:value})

        if(error){
            setError('')
        }
    }


    const createNewAccount =  (e) =>{
        e.preventDefault(); 

        createUserWithEmailAndPassword(auth,createUser.email,createUser.password)
        .then(async (result)=>{
           const user = result.user;
            const {displayName,email,password} = result.user;


            await updateProfile(user,{
                displayName:createUser.displayName
            });

            // const userRef = doc(db, 'users', user.uid);
            // await setDoc(userRef,{
            //     emailLogin: true,
            //     displayName:createUser.displayName,
            //     email:createUser.email
            // });

            const newUserData = {
                emailLogin: true,
                displayName: displayName,
                email:email,
                
            };

            setCreateUser(newUserData)
        
        }).catch(error=> handelError(error));

    };

    const handelError = (error) =>{
        let errorGot = '';

        switch(error.code){
            case('auth/email-already-in-use'):
            errorGot = 'This email is already in use.';
            break;

            case('auth/invalid-email'):
            errorGot =  'Invalid email address.';
            break;

            case('auth/weak-password'):
            errorGot = 'Password should be at least 6 characters long.';
            break;

            default:
                errorGot = 'Something went wrong. Please try again.';
        
        }

        setError(errorGot)
    }
    

    console.log(createUser)


    return(
            <div>
                    { createUser.emailLogin ? (<Thankyou checkData={createUser}></Thankyou>):(
                            <div className='create-account-container container-flex' style={{backgroundImage: `url(${createAccountBg})`}}>
                                <div className='create-account-box container-flex'>
                                    <div className='create-account-content'>
                                        <img src={createAccountCover} alt="" />
                                    </div>
                                    <div className='create-account-content container-flex'>
                                        <form onSubmit={createNewAccount}>
                                            <label className='create-input-tag-label' htmlFor="name">Name</label>
                                            <br />
                                            <input onBlur={handelChange} name='displayName' className='create-account-input' type="text" placeholder='Enter your name'/>
                                            <br />
                                            <label className='create-input-tag-label' htmlFor="email">Email</label>
                                            <br />
                                            <input onBlur={handelChange} name='email' className='create-account-input' type="email" placeholder='Enter your email'/>
                                            <br />
                                            
                                            <label className='create-input-tag-label' htmlFor="password">Password</label>
                                            <br />
                                            <input onBlur={handelChange} name='password' className='create-account-input' type="password" placeholder='Enter your password'/>
                                            <br />
                                            <div className='submit-button'>
                                                <button type='submit'>Create an Account</button>
                                            </div>
                                            <p>Already have an account? <Link className='link-to-login' to={'/login'}>Login</Link></p>
                                            <div className='container-flex'>
                                                {
                                                   
                                                        <p style={{color:'red'}}>{error}</p>
                                                    
                                                }
                                            </div>
                                        </form>
                                        
                                        
                                    </div>
                                    
                                
                                </div>
                                
                            </div>
                        )
                    }
            </div>
    );
};

export default CreateAnAccount;