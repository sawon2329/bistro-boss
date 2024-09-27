import React, { useEffect, useState } from 'react';
import './ourmenu.css';


import apiFileMenu from '../../menu.json';
import Header from '../Header/Header';
import coverImageMenu from '../../assets/menu/banner3.jpg';
import dessertsItemsCover from '../../assets/home/banner.jpg';


const OurMenu = () => {

    const findCatagory = (items)=> apiFileMenu.filter(fd => fd.category === items);

    const pizzaFilter = findCatagory("pizza");
    const saladFilter = findCatagory("salad");
    const supuFilter = findCatagory('soup')






    const dataForOffer = apiFileMenu.slice(16,20);
    const dataForDesserts = apiFileMenu.slice(22,28);



console.log(apiFileMenu)

    return (
        <div>
            <div className='menu-font-cover' style={{backgroundImage:`url(${coverImageMenu})`}}>
            <Header></Header>
            <div className='cover-data-container container-flex'> 
                <div className='cover-data container-flex'>
                    <h1>Our Menu</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </div>
        </div>


        <section className='todays-offer'>
            <div className='offer-heading-container container-flex'>
                <p className='dont-miss'>---Don't miss---</p>
                <div className='highlight-heading-border offer-heading'>
                    <h1>Today's Offer</h1>
                </div>
            </div>

            <div className='menu-content-container container-flex'>
                <div className='menu-card-container'>
                    
                        {
                            dataForOffer.map((data,id)=>{
                                return(
                                    <div key={id} className='menu-data-container container-flex'>
                                        <div className='menu-items-img container-flex'>
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div>
                                            <h5>{data.name} ----------- 
                                                <span className='menu-items-price'>${data.price}</span>
                                            </h5>
                                            <p>{data.recipe}</p>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        } 
                    
                </div>
            </div>
        </section>


        <section className='menu-section-container'>

                    <div className='heaidng-menu-food container-flex'>
                        <h3>ORDER YOUR FAVOURITE FOOD</h3>
                    </div>
                        
                <div className='menu-box container-flex' style={
                    {backgroundImage:`url(${dessertsItemsCover})`, 
                    backgroundPosition:'center',
                    backgroundSize:'cover'}
                    }>
                    <div className='items-content container-flex'>
                        <h1>Desserts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur, odit corrupti qui eligendi vel, recusandae suscipit, eum ipsa repellendus a? Natus perspiciatis repellendus corporis dignissimos optio, vero quasi recusandae.</p>
                    </div>
                </div>

                <div className=' menu-items menu-content-container container-flex'>
                    <div className='menu-card-container'>
                        {
                            dataForDesserts.map((data,id) => {
                                return(
                                    <div key={id} className='menu-data-container container-flex'> 
                                        <div className='menu-items-img container-flex'>
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div>
                                            <h5>{data.name} -----------
                                                <span className='menu-items-price'>${data.price}</span>
                                             </h5>
                                            <p>{data.recipe}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

        </section>


        <section className='menu-section-container'>

                    <div className='heaidng-menu-food container-flex'>
                        <h3>ORDER YOUR FAVOURITE FOOD</h3>
                    </div>
                        
                <div className='menu-box container-flex' style={
                    {backgroundImage:`url(${dessertsItemsCover})`, 
                    backgroundPosition:'center',
                    backgroundSize:'cover'}
                    }>
                    <div className='items-content container-flex'>
                        <h1>Pizza</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur, odit corrupti qui eligendi vel, recusandae suscipit, eum ipsa repellendus a? Natus perspiciatis repellendus corporis dignissimos optio, vero quasi recusandae.</p>
                    </div>
                </div>

                <div className=' menu-items menu-content-container container-flex'>
                    <div className='menu-card-container'>
                        {
                            pizzaFilter.map((data,id) => {
                                return(
                                    <div key={id} className='menu-data-container container-flex'> 
                                        <div className='menu-items-img container-flex'>
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div>
                                            <h5>{data.name} -----------
                                                <span className='menu-items-price'>${data.price}</span>
                                             </h5>
                                            <p>{data.recipe}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

        </section>


        <section className='menu-section-container'>

                    <div className='heaidng-menu-food container-flex'>
                        <h3>ORDER YOUR FAVOURITE FOOD</h3>
                    </div>
                        
                <div className='menu-box container-flex' style={
                    {backgroundImage:`url(${dessertsItemsCover})`, 
                    backgroundPosition:'center',
                    backgroundSize:'cover'}
                    }>
                    <div className='items-content container-flex'>
                        <h1>Salads</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur, odit corrupti qui eligendi vel, recusandae suscipit, eum ipsa repellendus a? Natus perspiciatis repellendus corporis dignissimos optio, vero quasi recusandae.</p>
                    </div>
                </div>

                <div className=' menu-items menu-content-container container-flex'>
                    <div className='menu-card-container'>
                        {
                            saladFilter.map((data,id) => {
                                return(
                                    <div key={id} className='menu-data-container container-flex'> 
                                        <div className='menu-items-img container-flex'>
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div>
                                            <h5>{data.name} -----------
                                                <span className='menu-items-price'>${data.price}</span>
                                             </h5>
                                            <p>{data.recipe}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

        </section>


        <section className='menu-section-container'>

                    <div className='heaidng-menu-food container-flex'>
                        <h3>ORDER YOUR FAVOURITE FOOD</h3>
                    </div>
                        
                <div className='menu-box container-flex' style={
                    {backgroundImage:`url(${dessertsItemsCover})`, 
                    backgroundPosition:'center',
                    backgroundSize:'cover'}
                    }>
                    <div className='items-content container-flex'>
                        <h1>Soups</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur, odit corrupti qui eligendi vel, recusandae suscipit, eum ipsa repellendus a? Natus perspiciatis repellendus corporis dignissimos optio, vero quasi recusandae.</p>
                    </div>
                </div>

                <div className=' menu-items menu-content-container container-flex'>
                    <div className='menu-card-container'>
                        {
                            supuFilter.map((data,id) => {
                                return(
                                    <div key={id} className='menu-data-container container-flex'> 
                                        <div className='menu-items-img container-flex'>
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div>
                                            <h5>{data.name} -----------
                                                <span className='menu-items-price'>${data.price}</span>
                                             </h5>
                                            <p>{data.recipe}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

        </section>

        </div>
    );
};

export default OurMenu;