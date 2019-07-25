import React, { useEffect } from 'react';


const PortfolioItem = ( props ) => {

        let blur = null;

        useEffect(() => {
                blur = document.querySelectorAll('.portfolio-blur');
        })


        const show = ( id ) => {
                if(blur != null) blur[id].style.opacity = '1';
        }
        const hide = ( id ) => {
                blur[id].style.opacity = '0';
        }


        

        return (  
                <div className="item" onMouseOver={() => show( props.id )} onMouseOut={() => hide( props.id )} >
                        <div className="portfolio-blur">
                                <div className="portfolio-name">{ props.name }</div>
                        </div>
                        <img src={ props.img } alt="portfolio"/>
                </div>
        );
}
 
export default PortfolioItem;