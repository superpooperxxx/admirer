import React from 'react';
import { Link } from "react-router-dom";
const GetOurService = () => {
        return (  
                <section className="contact-section">
                        <div className="contact-section-content">
                                <h3>Get Our Service</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <Link to="/contact/"><div className="contactUs-btn">Contact Us</div></Link>
                </section>
        );
}
 
export default GetOurService;