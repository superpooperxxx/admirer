import React from 'react';

import PageHeader from '../components/PageHeader';
import Welcome from '../components/Welcome';
import Clients from '../components/Clients/Clients';
import GetOurService from '../components/GetOurService';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';

const AboutUs = () => {
        return (
                <>
                        <PageHeader header='About Us' />
                        <Welcome />
                        <Clients />
                        <GetOurService />
                        <Team />
                        <Testimonials />
                </>
        );
}
 
export default AboutUs;