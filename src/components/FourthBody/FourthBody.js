import React from 'react';
import './FourthBody.css'

const FourthBody = () => {
    return (
        <div className="w-100 fourth">
            <div className="a">
                <video src="https://www.youtube.com/watch?v=XXYlFuWEuKI"></video>
            </div>
            <div className="b">
                <p className="b-text">Time travel used to be thought of as just science fiction, but Einstein's general theory of relativity allows for the possibility that we could warp space-time so much that you could go off in a rocket and return before you set out.
                <span className="b-after-text">A good traveler has no fixed plans, and is not intent on arriving.</span></p>
            </div>
        </div>
    );
};

export default FourthBody;