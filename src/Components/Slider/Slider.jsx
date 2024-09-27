import './slider.css'
import React, { useState } from 'react';

import image1 from '../../assets/home/01.jpg';
import image2 from '../../assets/home/02.jpg';
import image3 from '../../assets/home/03.png';
import Header from '../Header/Header';

const Slider = () => {
    const sliderText =[
        {
            title:'A Dining Experience Like No Other',
            text: 'Step into our cozy and inviting atmosphere, where every meal is a celebration. Whether you’re dining with family, friends, or colleagues',
            buttonText:'Shop Now'
        },

        {
            title:'Fresh Ingredients, Unforgettable Dishes',
            text:'We believe in using only the freshest, locally-sourced ingredients to create dishes that not only satisfy your hunger but also delight your senses',
            buttonText:'Menu'
        },

        {
            title:'Join Us for a Memorable Meal',
            text:'We invite you to explore our diverse menu, savor our signature dishes, and enjoy the warm hospitality that has made',
            buttonText:'Contact us'
        }
    ]

    const images = [image1,image2,image3];
    const effects = ['slide','zoom','fade'];

    const [currentIndex,setCurrentIndex] = useState(0);
    const [effect,setEffect] = useState('slide')

    const nextSlider = () =>{
        const next = (previous)=> previous === images.length -1 ? 0: previous + 1;
        setCurrentIndex(next);
        setEffect(effects(Math.floor(Math.random() * effects.length)));

    }

    const previousSlider = ()=>{
        const previous = (previous) => previous === 0 ? images.length -1 : previous -1;
        setCurrentIndex(previous);
        setEffect(effects(Math.floor(Math.random() * effects.length)))
    }


    return (
        <div className='slider'>
            <div className={`slider-container ${effect}`} style={{backgroundImage:`url(${images[currentIndex]})`}}>
                <Header></Header>
                
                <div className='slider-data'>
                    <button onClick={previousSlider}>Previous</button>
                    <div className='slider-content'>
                        
                            <h1>{sliderText[currentIndex].title}</h1>
                            <p>{sliderText[currentIndex].text}</p>
                            <button>{sliderText[currentIndex].buttonText}</button>
                    </div>
                    <button onClick={nextSlider}>Next</button>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;