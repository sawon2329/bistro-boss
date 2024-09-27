import React, { useState } from 'react';
import thankyou from '../../assets/contact/emo.png'
import './Thankyou.css'


const Thankyou = (props) => {

    const createAccountpage = props.checkData
    console.log(createAccountpage)

    const [fade,setFade] = useState(false);

    setTimeout(()=>{
            setFade(true)
    },200)


    return (
        <div className={`thanks-page container-flex-fd ${!fade ? 'fade-out' : 'fade-in'}`}>
            <h1>Thank you</h1>
            {
                createAccountpage.email ? (<p>Thank you for create an account.</p>):(<p>Thank you for contacting us, we will try to contact with you as soon as we can.</p>)
            }
            <img src={thankyou} alt="" />
        </div>
    );
};

export default Thankyou;