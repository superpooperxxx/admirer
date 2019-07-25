import React from 'react';

const Member = ( props ) => {
        return (  
                <div className="member">
                        <img src={ props.img } alt="member"/>
                        <h5>{ props.name }</h5>
                        <span className="post">{ props.post }</span>
                        <div className="social-icons">
                                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>   
                                <a href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>        
                                <a href="https://www.google.com"><i className="fab fa-google-plus-g"></i></a>     
                                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>       
                        </div>
                </div>
        );
}
 
export default Member;