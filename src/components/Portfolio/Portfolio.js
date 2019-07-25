import React from 'react';

import PortfolioItem from './PortfolioItem';

import p1 from '../../img/portfolio/1.jpg'
import p2 from '../../img/portfolio/2.jpg'
import p3 from '../../img/portfolio/3.jpg'
import p4 from '../../img/portfolio/4.jpg'
import p5 from '../../img/portfolio/5.jpg'
import p6 from '../../img/portfolio/6.jpg'
import p7 from '../../img/portfolio/7.jpg'
import p8 from '../../img/portfolio/8.jpg'

const Portfolio = () => {


        const items = [
                {
                        name: 'Portfolio Name', 
                        img: p1
                },
                {
                        name: 'Portfolio Name', 
                        img: p2
                },
                {
                        name: 'Portfolio Name', 
                        img: p3
                },
                {
                        name: 'Portfolio Name', 
                        img: p4
                },
                {
                        name: 'Portfolio Name', 
                        img: p5
                },
                {
                        name: 'Portfolio Name', 
                        img: p6
                },
                {
                        name: 'Portfolio Name', 
                        img: p7
                },
                {
                        name: 'Portfolio Name', 
                        img: p8
                }
        ]

        return (  
                <>
                <section className="portfolio-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        <div className="portfolio">
                                {
                                        items.map( ( item, id) => {
                                                return <PortfolioItem 
                                                        key={id}
                                                        id={id}
                                                        name={item.name}
                                                        img={item.img}
                                                />
                                        })
                                }
                        </div>
                </section>
                </>
        );
}
 
export default Portfolio;