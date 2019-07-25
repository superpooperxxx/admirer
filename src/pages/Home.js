import React from 'react';
import Welcome from '../components/Welcome';
import OurServices from '../components/Services/OurServices';
import OneSolution from '../components/OneSolution';
import SectionHeader from '../components/SectionHeader';
import Clients from '../components/Clients/Clients';
import Testimonials from '../components/Testimonials/Testimonials';
import GetOurService from '../components/GetOurService';

const Home = () => {
        return (
                <main>
                        <OneSolution />
                        <Welcome> 
                                <SectionHeader 
                                        header="welcome"
                                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt.."
                                />
                        </Welcome>
                        <OurServices />
                        <Clients />
                        <Testimonials />
                        <GetOurService />
                </main>
        )
}

export default Home;