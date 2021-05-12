import React from 'react';
import './AfterTrioCards.css'

const AfterTrioCards = () => {
    return (
        <div className="w-100 trio-img">
            <div className="block-1">
                <img src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/image-portfolio-1.jpg" alt=""/>
            </div>
            <div className="block-2">
                <img src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/image-portfolio-3.jpg" alt=""/>
                <img style={{marginTop:'23px'}} src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/image-portfolio-4.jpg" alt=""/>
            </div>
            <div className="block-3">
                <img src="https://ld-wp73.template-help.com/wordpress/prod_19731/v2/wp-content/uploads/2018/07/image-portfolio-2.jpg" alt=""/>
            </div>
        </div>
    );
};

export default AfterTrioCards;