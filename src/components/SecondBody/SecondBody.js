import React from 'react';
import './SecondBody.css'

const SecondBody = () => {
    return (
        <div className="w-100 main">
            <div className="first">
                <h1 className="explore">Explore a different <br/>way to travel</h1>
                <p className="discover">Discover new cultures and have a wonderful rest with Backpack Story! Select the country you’d like to visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and hotels.</p>
                <p className="discover">During our work we organized countless journeys for our clients. We started as a small tour bureau, and soon we expanded our offers list. Today we have valuable experience travelling and we can advise the most stunning resorts, cities and countries to visit!</p>
                <img className="signature" src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/img-home-4.png" alt=""/>
            </div>
            <div className="second">
                <img className="f" src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/img-2-home.jpg" alt=""/>
                <img className="s" src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/img-3-home.jpg" alt=""/>
            </div>
        </div>
    );
};

export default SecondBody;