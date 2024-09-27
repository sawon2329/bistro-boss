import React, { useEffect, useState } from 'react';
import './home.css';
import './RepetedStyle/repetedStyle.css';
import '../Style/global.css';
import Slider from '../Slider/Slider';
import menuJson from '../../menu.json';
import {Link} from 'react-router-dom';

import { chefRecommends, orderOnlineContent } from './HomeDataManage';
import bistroBossCover from '../../assets/shop/banner2.jpg'
import fromOurMenu from '../../assets/home/featured.jpg'
import Review from '../Review/Review';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Cart';


const Home = () => {
    const dispatch = useDispatch();
    
    const [onlineContent, setOnlineContent] = useState([]);

   useEffect(() =>{
    setOnlineContent(orderOnlineContent)
   },[])

   const [randomMenu, setRandomMenu] = useState([]);

   useEffect(()=>{
    const getRandomMenu = (menu,num)=>{
        const shufuld = [...menu].sort(()=> 0.5 - Math.random());
        const need = shufuld.slice(0,num);
        return need;
    }

    const random = getRandomMenu(menuJson,10);
    setRandomMenu(random);

   },[])

   console.log(randomMenu)

   //    const refreshReWork = window.location.reload();


   const chefData = chefRecommends(menuJson,3);



    return (
        <div>
            
            <Slider></Slider>


            <div className='opening-hours'>
                <h4>Opening Hours</h4>
                <p>---From 11AM to 10PM---</p>
            </div>

        <section className='order-content-container'>

            <div className='online-content-container'>
                
                    <div className=' order-online-text highlight-heading-border'>
                        <p >
                            Order Online
                        </p>
                    </div>

                    
                    <div className='content-container container-flex'>
                            {
                                onlineContent.map((items,id)=>{
                                    return (
                                    <div key={id} className='display-menu-items' style={{backgroundImage:`url(${items.img})`, backgroundSize:'cover',backgroundPosition:'center'}}>
                                    <h1>{items.title}</h1>
                                    </div>
                                )}
                            )
                            }
                    </div>  
                    
            </div>

        </section>

        <section className='bistro-boss container-flex'>
            
            <div className='bistro-boss-container container-flex'  
            style={
                {backgroundImage:`url(${bistroBossCover})`, 
                backgroundPosition:'center',
                backgroundSize:'cover', 
                borderRadius:'12px',
                }
                }>

                <div className='bistro-boss-content container-flex'>
                <h2>Bistro BOSS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam inventore obcaecati consectetur. Doloribus unde voluptatum id sit repudiandae, placeat quam veniam facere magni repellendus, itaque, non nobis ratione totam amet!</p>
                </div>

            </div>

        </section>

        <section className='our-menu-section container-flex'>
            <div className='our-menu-container container-flex'>
                <p className='our-menu-check-data'>---Check it out---</p>

                <div className='our-menu-heading highlight-heading-border'>
                    <h2>From Our Menu</h2>
                </div>

                <div className='home-menu-data menu-content-container container-flex'>
                    <div className='menu-card-container'>
                        {
                            randomMenu.map((items,id)=>{
                                return(
                                    <div className='menu-data-container container-flex'>
                                        <div className='menu-items-img container-flex'>
                                            <img src={items.image} alt="" />
                                        </div>
                                        <div className='menu-data-container'>
                                            <h5>{items.name} ----------- <span className='menu-items-price'>${items.price}</span></h5>
                                            <p>{items.recipe}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Link to={'/ourmenu'}><button>View Full Menu</button></Link>
                </div>

            </div>
        </section>

                        

        <section className='home-call-section container-flex'>

                <div className='home-call-us container-flex'>
                    <h1>Call Us: +880 1955454545</h1>
                    
                </div>

        </section>


        <section className='chef-recommends-section container-flex'>

        <div className='chef-container container-flex'>
            <p className='our-menu-check-data'>---Check it out---</p>

            <div className='our-menu-heading highlight-heading-border'>
                <h2>Chef Recommends</h2>
            </div>

            <div className='chef-reco-card container-flex'>
                {
                    chefData.map((items,id)=>{
                        const {image,name,recipe} = items;
                        return(
                            <div className='chef-reco-data' key={id}>
                                <img src={image} alt={name} />
                                <div className='container-flex chef-reco-content'>
                                    <h3>{name}</h3>
                                    <p>{recipe}</p>
                                    <div className='chef-reco-btn'>
                                        <button onClick={()=> dispatch(addToCart({id,image,name,recipe, qunatity:1}))}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


        </section>


        <section  style={
                    {
                        backgroundImage: `url(${fromOurMenu})`, backgroundPosition:'center', 
                        backgroundSize:'cover'
                    }}>

                <div className='fromOurMenu-container container-flex'>

                    <div className='fromOurMenu-heading'>
                        <p className='our-menu-check-data'>---Check it out---</p>

                        <div className='our-menu-heading highlight-heading-border heading-ourmenu'>
                            <h2>From Our Menu</h2>
                        </div>
                    </div>
                    <div className='fromOurMenu-box container-flex'>
                        <div className='fromOurMenu-img'>
                            <img src={fromOurMenu} alt="" />
                        </div>

                        <div className='fromOurMenu-content'>
                            <p>March 20, 2023</p>
                            <h3>Where I can get some?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam suscipit corporis quisquam molestiae obcaecati ut tenetur maxime excepturi officia. Quia praesentium fugit suscipit nihil, molestiae aliquid fuga quo architecto.</p>
                            <button className='from-ourmenu-btn'>Read more..</button>
                        </div>
                    </div>
                </div>
            
        </section>


        <section>
                    <div className='review-container container-flex-fd '>
                        <div>
                            <p className='our-menu-check-data'>---Check it out---</p>

                            <div className='review-testmonials-heading highlight-heading-border heading-ourmenu'>
                                <h1>TESTMONIALS</h1>
                            </div>
                        </div>
                        <div>
                            <Review></Review>
                        </div>
                    </div>
        </section>

        </div>
    );
};

export default Home;