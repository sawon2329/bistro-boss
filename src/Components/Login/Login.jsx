import React, { useContext, useEffect, useState } from 'react';
import './login.css';

import { googlePopupLogin, passwordUser } from './loginDataMange';
import { firebaseConfig } from '../../firebaseConfig/firebaseConfig';
import { initializeApp } from 'firebase/app';
import coverimage from '../../assets/reservation/wood-grain-pattern-gray1x.png';
import loginImage from '../../assets/others/authentication2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Account from './Account';
import {userContext} from '../../App';

const Login = () => {

    const [globalUser, setGlobalUser] = useContext(userContext);

    const [loginPasswordError,setpasswordError] = useState('');


    const [recapData, setCaptcha] = useState('');
    const [userCaptcha,setUserCap] = useState('');
    const [capError, setCapError] = useState('');

    
    useEffect(()=>{
        const latter = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let getdata = ''

        for(let i = 0; i<1; i++){
        getdata += latter.charAt(Math.floor(Math.random()*latter.length))
        }
        setCaptcha(getdata);

        setCapError('')
        setUserCap('')

    },[])

    const handleInputCaptcha = e =>{
        const targetData = e.target.value;
        setUserCap(targetData)
    }







    const [googlePopup, setGooglePopup] = useState({
        popupGoogle: false,
        displayName: '',
        email: '',
        photoURL: ''
    })



    const PopupLoginGoogle = () =>{
        googlePopupLogin()
        .then(result => {setGooglePopup(result),setGlobalUser(result), setpasswordError('')})
    }



    
    const [passwordLogin, setPasswordLogin] = useState({
        emailLogin:false,
        displayName:'',
        email: ''
    })

    // console.log(passwordLogin)


    const handlePasswordLogin = (e) =>{

        e.preventDefault();
        if(recapData === userCaptcha){
            const email = e.target.email.value;
        const password = e.target.password.value;

        passwordUser(email,password)
        .then(result =>{
            setPasswordLogin(result);
            setGlobalUser(result);
        }).catch(error=>handleError(error))
        setCapError('');
        setpasswordError('');
        }
        else{

            setCapError('Captcha not Match')
           setTimeout(()=>{
            setCapError('')
           },1000)
        }
    }



    const handleError = (error) => {

        const errorCode = error.code;
        console.log(errorCode)

        let errorMessage = '';
    
        if(errorCode === 'auth/user-not-found'){
                errorMessage = 'No account found with this email';
        }
    
        else if(errorCode === 'auth/wrong-password'){
                errorMessage = 'Incorrect password';
        }
    
        else if(errorCode === 'auth/user-disabled'){
                errorMessage = 'Your account has been disabled';
        }
    
        else if(errorCode === 'auth/invalid-credential'){
                errorMessage = " Incorrect email or password";
        }
        else{
                errorMessage = 'Something went wrong. Please try again.';
        }
    
        setpasswordError(errorMessage);

        setTimeout(()=>{
            setPasswordLogin('')
        },500
        )
    };


console.log(loginPasswordError)

    






console.log(googlePopup)

    return (
        <div>
            {
                globalUser.popupGoogle ? (<Account></Account>) :(globalUser.emailLogin ? (<Account ></Account>):(
                <div className='login-container container-flex' style={{backgroundImage:`url(${coverimage})`}}>
                    <div className='login-content-container container-flex'>
                        <div className='login-content login-img'>
                            <img src={loginImage} alt="" />
                        </div>
                        <div className='login-content'>
                            <div className='container-flex-fd'>
                                <h3>Login</h3>
                                <div>
                                <form onSubmit={handlePasswordLogin}>
        
                                        
                                            <label className='login-input-label' htmlFor="email">Email</label>
                                            <br />
                                            <input className='login-input-tag' name='email' type="email" placeholder='Enter your email'/>
                                        
        
                                        
                                            <br />
                                            <label className='login-input-label' htmlFor="password">Password</label>
                                            <br />
                                            <input className='login-input-tag' name='password' type="password" placeholder='Enter your password' />
        
                                        
        
                                        
                                        <br />
                                            <label className='login-input-label' htmlFor="captcha">Captcha: {recapData}</label>
                                            <br />
                                            <input onChange={handleInputCaptcha} className='login-input-tag' type="text" placeholder='Fill the captcha' required/>
                                    
        
                                        <br />
                                        <div className='error-message'>
                                            {
                                                capError ? (<p className={`errorMessage ${capError? 'show': ''}`}>{capError}</p>) : (loginPasswordError ? (<p className={`error-message ${loginPasswordError ? 'show' : '' }`}>{loginPasswordError}</p>):'')
                                            }
                                        </div>
                                        <div className='submit-button container-flex'>
                                            
                                            
                                            <button  type='submit'>Login</button>
                                        </div>
                                </form>
        
                                
        
                                    <div className='new-and-create container-flex-fd'>
                                        <p className='new-account-text'>New here?</p> 
                                        <Link to={'/createanaccount'} className=' new-account-link'>Create a new Account</Link>
                                        <div className='sing-icon-container container-flex-fd'>
                                            <h2>or sing in with</h2>
                                            <div className='sing-in-account'>
                                                <FontAwesomeIcon  className='sing-account-icon' icon={faFacebook}/>
                                                <FontAwesomeIcon className='sing-account-icon' icon={faInstagram}/>
                                                <FontAwesomeIcon onClick={PopupLoginGoogle} className='sing-account-icon' icon={faGoogle}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>))
            }
        </div>
    )
};

export default Login;