import React from 'react';

import img1 from '../img/intro-carousel/banner.svg';
import { Link } from "react-router-dom";

const OneSolution = () => {
        return (  
                <section className="one-solution">
                        <div className="one-solution-left">
                                <h1>
                                        <div>All in One</div>
                                        solution
                                </h1>
                                <Link to="/services/"><div className="service-btn"> Our Service</div></Link>
                        </div>
                        <img src={img1} alt="man"/>
                </section>
        );
}
 
export default OneSolution;