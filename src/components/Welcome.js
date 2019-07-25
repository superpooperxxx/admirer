import React from 'react';

import img2 from '../img/about-img.png';

const Welcome = ( props ) => {

        return ( 
                <section className="welcome">
                        {props.children}
                        <div className="welcome-content">
                                <img src={img2} alt="about"/>
                                <div className="welcome-right">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                        <div className="welcome-thin_text">Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident</div>
                                        <p>Consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat</p>
                                        <ul>
                                                <li><i className="far fa-check-circle"></i> Dolores quae porro consequatur aliquam, incidunt fugiat culpa.</li>
                                                <li><i className="far fa-check-circle"></i> Dolores quae porro consequatur aliquam, culpa esse aute nulla.</li>
                                                <li><i className="far fa-check-circle"></i> Dolores quae porro esse aute nulla. malis nulla duis fugiat</li>
                                        </ul>
                                </div>
                        </div>
                </section>
        );
}
 
export default Welcome;