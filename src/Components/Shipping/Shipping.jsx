import React, { useContext } from 'react';
import {useForm} from 'react-hook-form';
import './shipping.css'
import { userContext } from '../../App';


const ShippingAddress = () => {

    const [globalUser, setGlobalUser] = useContext(userContext);



  const {register,handleSubmit,watch,formState:{error}}= useForm();

    const formSubmit = (data) =>{
        console.log(data)
    };
    return (
        <form className='shipping-container' onSubmit={handleSubmit(formSubmit)}>
            <div className='shipping-data-filed'>
            <label htmlFor="">Name</label>
            <br/>
            <input defaultValue={globalUser.name} {...register('name', {required:true})} required/>
            </div>

            <div className='shipping-data-filed'>
                <label htmlFor="">Email</label>
                <br/>
                <input type="email" defaultValue={globalUser.email}  {...register('email', {required:true})} required />
            </div>

            <div className='shipping-data-filed'>
                <label htmlFor="">Address</label>
                <br/>
                <input type="text" {...register('address', {required: true})}  required/>
            </div>


           
        <div>
            <button className='shipping-next-btn'>Payment</button>
        </div>
        </form>
    );
};

export default ShippingAddress;
