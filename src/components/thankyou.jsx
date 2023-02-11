import React from "react";
import Card from "./Card";
import "./thankyou.css";
import thankYouImg from './media/illustration-thank-you.svg'

const ThankYou = ({rating}) => {
    return (
        <Card>
            <div className="trank_you_img_container">
                <img src={thankYouImg} alt="" />
            </div>
            <div className="selected">
                <p>You selected {rating} out of 5</p>
            </div>

            <h2 className="title">Thank You!</h2>
            <p className="text"> We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>

        </Card>
    )
}

export default ThankYou