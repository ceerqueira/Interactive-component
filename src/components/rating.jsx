import React, { useState } from "react";
import Card from "./Card";

import "./rating.css";
import starImg from './media/icon-star.svg'

const Rating = ({rating, setRating,setShowThankYouPage}) => {
    const [activeRating, setActiveRating] = useState({
        oneStart:false,
        twoStart:false,
        threeStart:false,
        fourStart:false,
        fiveStart:false,
    })

    const handleSubmit = () => {
        if(!rating) return;

        setShowThankYouPage(true);
    }



    return (
        <Card>
            <div className="start_img_container">
                <img src={starImg} alt="" />
            </div>
            <h2 className="title">How did we do?</h2>
            <p className="text">Please let us know how we did with your support request. All feedback is appreciated 
                 to help us improve our offering!</p>
            <div className="rating">
                <div className={
                    activeRating.oneStart ? 
                    'rating-container active' 
                    : 'rating-container'
                    }
                    onClick= {() => {
                        setActiveRating({
                            oneStart:true,
                            twoStart:false,
                            threeStart:false,
                            fourStart:false,
                            fiveStart:false,
                        })
                        setRating(1)
                    }}
                    
                    >1</div>
                <div className={
                    activeRating.twoStart ? 
                    'rating-container active' 
                    : 'rating-container'
                    }
                    onClick= {() => {
                        setActiveRating({
                            oneStart:false,
                            twoStart:true,
                            threeStart:false,
                            fourStart:false,
                            fiveStart:false,
                        })
                        setRating(2)
                    }}
                    >2</div>
                <div className={
                    activeRating.threeStart ? 
                    'rating-container active' 
                    : 'rating-container'
                    }
                    onClick= {() => {
                        setActiveRating({
                            oneStart:false,
                            twoStart:false,
                            threeStart:true,
                            fourStart:false,
                            fiveStart:false,
                        })
                        setRating(3)
                    }}
                    >3</div>
                <div className={
                    activeRating.fourStart ? 
                    'rating-container active' 
                    : 'rating-container'
                    }
                    onClick= {() => {
                        setActiveRating({
                            oneStart:false,
                            twoStart:false,
                            threeStart:false,
                            fourStart:true,
                            fiveStart:false,
                        })
                        setRating(4)
                    }}
                    >4</div>
                <div className={
                    activeRating.fiveStart ? 
                    'rating-container active' 
                    : 'rating-container'
                    }
                    onClick= {() => {
                        setActiveRating({
                            oneStart:false,
                            twoStart:false,
                            threeStart:false,
                            fourStart:false,
                            fiveStart:true,
                        })
                        setRating(5)
                    }}
                    >5</div>
            </div>
            <button className="submit_btn" onClick={handleSubmit}>Submit</button>
        </Card>

    )
}

export default Rating