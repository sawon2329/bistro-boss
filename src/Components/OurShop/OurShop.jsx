import './ourshop.css';

import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

import banner2 from '../../assets/shop/banner2.jpg';

import jsonMenu from '../../menu.json';
import MenuSection from './menuSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleLeft,faCircleRight} from '@fortawesome/free-solid-svg-icons';


const OurShop = () => {

    const [menu,setMenu] = useState([]);
    const [clickCategory, setClickCategory] = useState('salad')
    const [currnetPage, setCurrentPage] = useState(0);
    const [fade,setFade] = useState(true);
    const itemsPerPage = 6;




    useEffect(()=>{
        const filterCategory = jsonMenu.filter(item => item.category === clickCategory);
        setMenu(filterCategory)
        setCurrentPage(1)
        setFade(true)

    },[clickCategory])


    const totalPages = Math.ceil(menu.length / itemsPerPage);
    console.log(totalPages)

    const currnetItems = menu.slice((currnetPage -1) * itemsPerPage, currnetPage * itemsPerPage);

    console.log(currnetItems)
    const handleNextPage = () =>{
        setFade(false);
      setTimeout(()=>{
        if(currnetPage < totalPages) {
            setCurrentPage(currnetPage + 1);
            setFade(true)
          }
      },300)
    }


    const handlePrevPage = () =>{
        setFade(false)
      setTimeout(()=>{
        if(currnetPage + 1){
            setCurrentPage(currnetPage - 1)
            setFade(true)
          }
      },300)
    }



    return (
        <div className='ourshop-container'>
            <div className='ourshop-cover' style={{backgroundImage:`url(${banner2})`}}>
                <Header></Header>
                <div className='container-flex cover-content'>
                    <div className='ourshop-cover-content container-flex-fd'>
                        <h1>Our Shop</h1>
                        <h4>WOULD YOU LIKE TO TRY A DISH?</h4>
                    </div>
                </div>

            </div>


            <section className='menu-section container-flex-fd'>


                <div>
                    <button className='categoryBtn' onClick={()=> setClickCategory('salad')}>Salad</button>
                    <button className='categoryBtn' onClick={()=> setClickCategory('pizza')}>Pizza</button>
                    <button className='categoryBtn' onClick={()=> setClickCategory('soup')}>Soups</button>
                    <button className='categoryBtn' onClick={()=> setClickCategory("dessert")}>Desserts</button>
                    <button className='categoryBtn' onClick={()=> setClickCategory('drinks')}>Drinks</button>
                   
                </div>

                <div className={`menu-items ${fade ? 'fade-in': 'fade-out'}`}>

                    {
                       currnetItems.length > 0 ? (
                        currnetItems.map((item,id) =><MenuSection key={id} item={item}></MenuSection>)
                       ):(
                        <h1>No Item are aviable yet in this catagory</h1>
                       )
                    }

                   </div>

                   <div className='pageChange container-flex'>
                   
                   
                   <FontAwesomeIcon onClick={totalPages === 1 ? null : handlePrevPage} className={`arrow-icon ${currnetPage === 1 ? 'disabled':''}`} icon={faCircleLeft}/>
                   
                   <div className={`page-calculate`}>
                      <h3>{`${currnetPage} / ${totalPages}`}</h3>
                   </div>
                   
                   <FontAwesomeIcon onClick={currnetPage === totalPages ? null : handleNextPage} className={`arrow-icon ${currnetPage === totalPages ? 'disabled' :''}`} icon={faCircleRight} />
                   

                   </div>

            </section>

            
        </div>
    );
};

export default OurShop;

