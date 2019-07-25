import React from 'react';
import Service from './Service';

import SectionHeader from '../SectionHeader';
import img1 from '../../img/data_b1wx.svg'
import img2 from '../../img/recording_lywr.svg'
import img3 from '../../img/video_call_kxyp.svg'

const OurServices = () => {

        const services = [
                {
                        img: img1,
                        header: "Marketing",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        img: img2,
                        header: "Consulting",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                },
                {
                        img: img3,
                        header: "Strategy",
                        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
                }
        ]

        return (  
                <section>
                        <SectionHeader 
                                header='Our services'
                                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt.."
                        />
                        <div className="services">
                                {
                                        services.map((service, id) => {
                                               return <Service 
                                                        key={id}
                                                        img={service.img}
                                                        header={service.header}
                                                        content={service.content}
                                                />
                                        })
                                }
                        </div>
                </section>
        );
}
 
export default OurServices;