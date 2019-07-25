import React from 'react';

import SectionHeader from '../SectionHeader';
import Testimony from './Testimony';

const Testimonials = () => {

        const testimonials = [
                {
                        content: 'Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore',
                        name: "Marcus Kell",
                        post: 'Marketing'
                },
                {
                        content: 'Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore',
                        name: "Marcus Kell",
                        post: 'Marketing'
                },
                {
                        content: 'Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore',
                        name: "Marcus Kell",
                        post: 'Marketing'
                }
        ]
        return ( 
                <section className="testimonials">
                        <SectionHeader 
                                header="Testimonials"
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore"
                        />
                        <div className="testimonials-slider">
                        {
                                        testimonials.map((test, id) => {
                                                return <Testimony 
                                                        key={id}
                                                        content={test.content}
                                                        name={test.name}
                                                        post={test.post}
                                                />
                                        })
                                }
                        </div>
                </section>
         );
}
 
export default Testimonials;