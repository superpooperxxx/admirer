import React from 'react';

const Service = ( props ) => {
        return (  
                <div className="service">
                        {props.img ? <img src={props.img} alt="service"/> : null}
                        {props.icon ? <div className="icon">{ props.icon }</div> : null}  
                        <h4>{props.header}</h4>
                        <div className="service-content">{props.content}</div>
                </div>
        );
}
 
export default Service;