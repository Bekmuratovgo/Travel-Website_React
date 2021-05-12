import React from 'react';
import './TrioTitle.css'

const TrioTitle = () => {
    return (
        <div className="w-100 glavnaya">
            <div className="alpha">
                <h1>01. BEST HOTELS</h1>
                <p>
                We guarantee the best hotels and very comfortable rooms, which will be appreciated by every traveller. You will be absolutely happy with the hotel and will have a wonderful vacation there.
                </p>
            </div>
            <div className="betta">
                <h1>02. TOURIST GUIDE</h1>
                <p>
                We provide our clients with such a service as Tourist Guide. Its main goal is to ensure people with all necessary information any time he needs. This service is similar to Customer Support with emphasis on travelling.
                </p>
            </div>
            <div className="gamma">
                <h1>03. FLIGHTS TICKETS</h1>
                <p>
                You can book tickets on any plane online via our booking system. Here you have an opportunity to select  transport operator. Our representatives will help you with details.
                </p>
            </div>
        </div>
    );
};

export default TrioTitle;