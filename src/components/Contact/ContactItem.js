import React from 'react';

const ContactItem = ( props ) => {
        return (  
                <div className="info">
                        {props.i}
                        <div className="address-content">
                                <div>{ props.header }</div>
                                <span>{ props.content }</span>
                        </div>
                </div>
        );
}
 
export default ContactItem;