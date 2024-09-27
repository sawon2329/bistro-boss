import React from 'react';
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/Cart';
import { Link } from 'react-router-dom';


const Cart = () => {
    const dispatch = useDispatch();

    const storeCart = useSelector(state => state.cart.cart);
    console.log(storeCart)


    

    return (
        
        <div >
           
               {
                   storeCart.map((items,id) => {
                       return(
                           <div className='review-container' key={id}>                        
                   
                               
                                       <div className='product-info'>
                                       
                                       <h4>{items.name}</h4>
                                       <img src={items.image} alt="" />                                                
                                       </div>

                                       <div className='product-price'>
                                       <h5>$12</h5>
                                       </div>

                                       <div className='order-control'>
                                       <button className='order-count ' >+</button>
                                       <input className='order-count-input' value={items.quantity} type="text" readOnly/>
                                       <button className='order-count' >-</button>
                                       </div>

                                   <button  className='items-remove-btn' onClick={()=> dispatch(removeFromCart({id:items.id}))}>Remove</button>
                               
                       
                                       
                           </div>
                       )
                   })
               }
                                       
                                   
                
                {
                   storeCart && storeCart.length> 0 ? (<div className='checkout-container'>
                       <h4>Total Product Price: Waiting for price update</h4>
                       
                       <Link to={'/shipping'}><button>CheckOut</button></Link>
                       </div>):(
                       <div style={{height:'90vh', display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                                   <h1>Your Cart is empty!</h1>
                                   <h4>Please add product on your cart and goahead</h4>
                       </div> )
                }
       </div>
);
};


export default Cart;