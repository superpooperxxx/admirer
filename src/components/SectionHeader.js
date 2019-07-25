import React from 'react';

const SectionHeader = ( props ) => {
        return (  
                <div className="section-header">
                        <h2>{props.header}</h2>
                        <div className="blue-line"></div>
                        <p>{props.content}</p>
                </div>
        );
}
 
export default SectionHeader;