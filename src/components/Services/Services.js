import React from 'react';

import Service from './Service';

const Services = () => {

        const services = [
                {
                        icon: <i className="far fa-chart-bar"></i>,
                        header: "Marketing",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        icon: <i className="far fa-image"></i>,
                        header: "Consulting",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        icon: <i className="fas fa-briefcase"></i>,
                        header: "Strategy",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        icon: <i className="fas fa-map"></i>,
                        header: "Quality",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        icon: <i className="fas fa-brain"></i>,
                        header: "Analysis",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        icon: <i className="far fa-eye"></i>,
                        header: "Creative",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                }
        ]
        return (  
                <section className="services services-section">
                        {
                                services.map(( service, id ) => {
                                        return <Service 
                                                key={id}
                                                icon={service.icon}
                                                header={service.header}
                                                content={service.content}
                                        />
                                })
                        }
                </section>
        );
}
 
export default Services;