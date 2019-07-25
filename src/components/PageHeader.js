import React from 'react';

const PageHeader = ( props ) => {
        return (  
                <section className="page-header">
                        <h2>{ props.header }</h2>
                        <p>We create the opportunities!</p>
                </section>
        );
}
 
export default PageHeader;