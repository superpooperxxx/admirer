import React from 'react';

const Testimony = ( props ) => {
        return (  
                <div className="testimony">
                        <div className="testimony-content">{props.content}</div>
                        <h5>{props.name}</h5>
                        <span>{props.post}</span>
                </div>
        );
}
 
export default Testimony;