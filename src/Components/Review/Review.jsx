import React, { useEffect, useState } from 'react';
import './review.css';
import jsonReviewFile from '../../reviews.json'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'; // Regular star



const Review = () => {

    const [currentIndex ,setIndex] = useState(0);
    const [fade, setFade] = useState(true)
    
    const itemReview = (rating) =>{
        let star = [];
        for(let i = 1; i <= 5; i++){
            if(i<=rating){
                star.push(<FontAwesomeIcon key={i} style={{color:'#D99904'}} icon={faStar} />)
            }
            
            else{
                star.push(<FontAwesomeIcon key={i} style={{color:'#444444'}} icon={regularStar} />)
            }
        }

        return star;
    }

    const nextReview = () =>{
        setFade(false);
        setTimeout(()=>{
            setIndex(next=> (next === jsonReviewFile.length -1 ? 0 : next +1 ))
            setFade(true)
        },300)
    }

    const previousReview = () =>{
        setFade(false);
        setIndex(previous => previous === 0 ? jsonReviewFile.length -1 : previous -1)
        setTimeout(()=>{
            setFade(true)
        },300)
    }


console.log(jsonReviewFile)

    return (
        <div >
                    <div className='rating-cotainer container-flex'>
                        
                        <button aria-label='Next Review' className='next-review' onClick={nextReview}><FontAwesomeIcon icon={faChevronLeft}/></button>

                        <div className={`rating-box container-flex ${fade? 'fade-in' : 'fade-out'}`} >
                            <h1>{jsonReviewFile[currentIndex].name}</h1>
                            <div>
                                {
                                    itemReview(jsonReviewFile[currentIndex].rating)
                                }
                            </div>

                            <p>{jsonReviewFile[currentIndex].details}</p>


                        </div>
                        <button aria-label='Previous Review' onClick={ previousReview}><FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>
        </div>
    );
};

export default Review;