import React from 'react';
import './menusection.css'

const menuSection = (props) => {
    const data = props.item
console.log(data)

    return (
        <div className='menu-items-container '>
              <div className='menu-item-img'>
                <img src={data.image} alt="" />
              </div>
              <div className='container-flex-fd'>
                <div className='menu-card-content'>
                    <h3>{data.name}</h3>
                    <p>{data.recipe}</p>
                </div>
                <button>Add to cart</button>
              </div>
        </div>
    );
};

export default menuSection; 