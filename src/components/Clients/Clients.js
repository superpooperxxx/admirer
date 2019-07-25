import React from 'react';
import SectionHeader from '../SectionHeader';

import logo1 from '../../img/clients/client-1.png';
import logo2 from '../../img/clients/client-2.png';
import logo3 from '../../img/clients/client-3.png';
import logo4 from '../../img/clients/client-4.png';
import logo5 from '../../img/clients/client-5.png';
import logo6 from '../../img/clients/client-6.png';

class Clients extends React.Component{
        state = {
                logos: [
                        <img key={1} src={logo1} alt="client"/>,
                        <img key={2} src={logo2} alt="client"/>,
                        <img key={3} src={logo3} alt="client"/>,
                        <img key={4} src={logo4} alt="client"/>,
                        <img key={5} src={logo5} alt="client"/>,
                        <img key={6} src={logo6} alt="client"/>
                ]
        }


        componentDidMount(){
                let i = 1;
                setInterval(() => {
                        setTimeout(() => {
                                let logos = this.state.logos;
                                let logo = logos[logos.length - 1];

                                logos.splice(logos.length - 1, 1);
                                logos.unshift(logo);

                                this.setState({logos: logos});
                        
                        }, 100)
                        i++;
                }, 1000)
        }

        render(){
                return (  
                        <section className="clients">
                                <SectionHeader 
                                        header="Clients"
                                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore"
                                />
                                <div className="clients-slider">
                                        
                                        {
                                                this.state.logos.map((logo) => {
                                                        return logo
                                                })
                                        }
                                </div>
                        </section>
        
                )
        }
}
 
export default Clients;