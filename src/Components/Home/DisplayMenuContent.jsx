import React from 'react';
import './displaymenucontent.css'

const DisplayMenuContent = (props) => {

    const {title,img} = props.items

    return (
        <div className='display-menu-items' style={{backgroundImage:`url(${img})`, backgroundSize:'cover',backgroundPosition:'center'}}>
        <h1>{title}</h1>
        </div>
    );
};

export default DisplayMenuContent;