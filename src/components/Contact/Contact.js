import React from 'react';

import ContactItem from './ContactItem';

const Contact = () => {

        const contacts = [
                {
                        symbol: <i className="fas fa-map-marker-alt"></i>,
                        header: 'address',
                        content: 'MN-12 Lincon Street, NewYork 12356, USA'
                },
                {
                        symbol: <i className="fas fa-phone-alt"></i>,
                        header: 'phone number',
                        content: '+1 2345 67890 12'
                },
                {
                        symbol: <i className="far fa-envelope"></i>,
                        header: 'email',
                        content: 'name@website.com'
                }
        ]

        const style = {
                width: '600px',
                height: '450px',
                frameborder: '0',
                border: '0'
        }
        return (  
                <section>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                        <div className="contact">
                                <div className="contact-info">
                                        {
                                                contacts.map(( c, id ) => {
                                                        return <ContactItem 
                                                                key={id}
                                                                i={c.symbol}
                                                                header={c.header}
                                                                content={c.content}
                                                        />
                                                })
                                        }
                                </div>
                                <form>
                                        <input type="text" placeholder="Full Name"/>
                                        <input type="e-mail" placeholder="Email"/>
                                        <textarea placeholder="Message"></textarea>
                                        <button>Send</button>
                                </form>
                        </div>
                </section>
        );
}
 
export default Contact;