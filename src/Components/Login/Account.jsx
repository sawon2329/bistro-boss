import React, { useContext } from 'react';
import Header from '../Header/Header'
import './Account.css'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Account = (props) => {
    const [globalUser,setGlobalUser] = useContext(userContext)
    // const googlePopupLogin = props.googlePopup;
    // const passwordLogin = props.passwordLogin;



    const {displayName,photoURL,email,popupGoogle} = globalUser || '';



    return (
        <div>
            

                            {
                                popupGoogle ? (<div className='container-flex'>
                                    <div className='details-container owner-details-container'>
                                        <div className='owner-photo'>
                                            <img src={photoURL} alt="" />
                                        </div>
                                        <div className='details-menu'>
                                            <div>
                                                <h3>Dashboard</h3>
                                            </div>
                                            <div>
                                                <h3>Account</h3>
                                            </div>
                                            <div>
                                                <h3>Cart</h3>
                                            </div>
                                            <div>
                                                <h3>Order</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='details-container result-data-container'>
                                        <h1>{displayName}</h1>
                                        <h3>{email}</h3>
                                </div>
                            </div>):(<div className='container-flex'>
                                <div className='details-container owner-details-container'>
                                    <div className='owner-photo'>
                                        <img src={photoURL} alt="" />
                                    </div>
                                    <div className='details-menu'>
                                        <div>
                                            <h3>Dashboard</h3>
                                        </div>
                                        <div>
                                            <h3>Account</h3>
                                        </div>
                                        <div>
                                            <h3>Cart</h3>
                                        </div>
                                        <div>
                                            <h3>Order</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='details-container result-data-container'>
                                    <h1>{displayName}</h1>
                                    <h3>{email}</h3>
                            </div>
                        </div>)
                            }
                    
        </div>
    );
};

export default Account;