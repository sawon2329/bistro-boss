import React, { useState } from 'react';
import './contact.css'

import Header from '../Header/Header';
import coverContact from '../../assets/contact/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume,faLocationDot, faClock, faUser, faEnvelope, faPhone, faMessage, faAsterisk, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {useForm} from 'react-hook-form';
import Thankyou from '../Thankyou/Thankyou';

const Contact = () => {

    const {register,handleSubmit,watch, formState: {errors}} = useForm();
    const [contactData, setContactData] = useState({
        submitted: false,
        name:'',
        email:'',
        phone:'',
        message:''
    })

    const [fade,setFade] = useState(true);


    const submitForm = (data)=>{
        setTimeout(()=>{
            setFade(false)
            setTimeout(()=>{
                setContactData({...data, submitted: true})
            },400)
        },300)
    }

    console.log(contactData)



    return (
        <div>
            <div className='contact-content-container ' style={{backgroundImage:`url(${coverContact})`, backgroundPosition:'center',backgroundSize:'cover'}}>
                <Header/>
                <div className='content-cover-data'>
                    <div className='contact-cover-content container-flex-fd'>
                        <h1>Contact Us</h1>
                        <p>Need Help? Here we are waiting for you.</p>
                    </div>
                </div>
            </div>


            <section id='business-details'>


                <div>

                    <div className='container-flex-fd'>
                        <p className='send-us'>---visit us ---</p>
                        <div className='our-details highlight-heading-border'>
                                <h2>Our Details</h2>
                            </div>
                        <div>
                            

                            <div className='business-details-container container-flex'>

                                <div className="business-details-card ">

                                    

                                        <div className='business-details-icon container-flex'>
                                            <FontAwesomeIcon  icon={faPhoneVolume} />    
                                        </div>

                                        <div className='contact-details-box container-flex-fd'>
                                            <div className='business-details-contact '>
                                                <h3>Phone</h3>
                                                <p>+88019 72727229</p>
                                            </div>
                                        </div>
                                    

                                </div>

                                <div className="business-details-card ">

                                   

                                        <div className='business-details-icon container-flex'>
                                        <FontAwesomeIcon  icon={faLocationDot} />
                                        </div>

                                        <div className='contact-details-box container-flex-fd'>
                                            <div className='business-details-contact '>
                                                <h3>Address</h3>
                                                <h5>Ibrahim mansion (4th floor), room # 504, purana paltan, 1000</h5>
                                                <h5>Dhaka, Dhaka, 1000</h5>
                                            </div>
                                        </div>
                                   

                                </div>

                                <div className="business-details-card ">

                                    

                                        <div className='business-details-icon container-flex'>
                                        <FontAwesomeIcon  icon={faClock} />
                                        </div>
                                        
                                        <div className='contact-details-box container-flex-fd'>
                                            <div className='business-details-contact '>
                                                <h3>Working Hours</h3>
                                                <h5>Fri-Sun: 10.00 - 23.00</h5>
                                                <h5>Mon-Wed: 80.00 - 22.00</h5>
                                            </div>
                                        </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <section id='contact-form' className='container-flex'>
                <div className='contact-form-box'>
                {
                    contactData.submitted  ? (<Thankyou></Thankyou>):(
                <div className={`fade-in ${!fade ? 'fade-out': ''}`}>
                    <div className='container-flex-fd'>
                        <p className='send-us'>---Send us a message---</p>
                        <div className='contact-heading highlight-heading-border'>
                            <h1>Contact form</h1>
                        </div>
                    </div>
                    
                    <div className='contact-form-container container-flex'>
                        <div>
                            <form onSubmit={handleSubmit(submitForm)} className='inputFiled-container'>

                                <div className='input-filed'>
                                    <label htmlFor="name"><FontAwesomeIcon className='icon-padding' icon={faUser}/>Name*</label>
                                    <br />
                                    <input id='name' {...register('name')} className='user-input-box' type="text"  placeholder='Enter your name' required/>
                                </div>
                                <div className='input-filed'>
                                    <label htmlFor="email"><FontAwesomeIcon className='icon-padding' icon={faEnvelope}/>Email*</label>
                                    <br />
                                    <input id='email' {...register('email')} className='user-input-box' type="email"  placeholder='Enter your email' required/>
                                </div>
                                <div className='input-filed'>
                                    <label htmlFor='phone'><FontAwesomeIcon className='icon-padding' icon={faPhone}/>Phone*</label>
                                    <br />
                                    <input id='phone' {...register('phone')} className='user-input-box' type="tel" placeholder='Enter your phone' required/>
                                </div>
                                <div className='input-filed'>
                                    <label htmlFor="message"><FontAwesomeIcon className='icon-padding' icon={faMessage}/>Message*</label>
                                    <br />
                                    <textarea {...register('message')} id='message' className='user-input-box message-box' type="text"  placeholder='write your message here' required/>
                                </div>

                                <div className='container-flex'>
                                    <button type='submit'>Send <FontAwesomeIcon className='submit-icon' icon={faPaperPlane}/></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                    )
                }
                </div>
            </section>
            
        </div>
    );
};

export default Contact;