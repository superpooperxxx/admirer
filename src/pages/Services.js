import React from 'react';
import PageHeader from '../components/PageHeader';
import ServicesSec from '../components/Services/Services';
import Clients from '../components/Clients/Clients';
import Welcome from '../components/Welcome';
import GetOurService from '../components/GetOurService';

const Services = () => {
        return ( 
                <>
                <PageHeader header='Services'/>
                <ServicesSec />
                <Clients />
                <Welcome />
                <GetOurService/>
                </>
        );
}
 
export default Services;