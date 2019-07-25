import React from 'react';

import SectionHeader from '../SectionHeader';
import Member from './Member';

import m1 from '../../img/team1.jpg'
import m2 from '../../img/team2.jpg'
import m3 from '../../img/team3.jpg'
import m4 from '../../img/team4.jpg'

const Team = () => {

        const members = [
                {
                        img: m1,
                        name: 'Amanda Jepson',
                        post: 'Chief Executive Officer'
                },
                {
                        img: m2,
                        name: 'Michell Kellon',
                        post: 'Technical Manager'
                },
                {
                        img: m3,
                        name: 'French Lincon',
                        post: 'Financial Manager'
                },
                {
                        img: m4,
                        name: 'James Smith',
                        post: 'Accountant'
                }
        ]
        return (  
                <section>
                <SectionHeader 
                        header="Our team"
                />
                <div className="team">
                        {
                                members.map(( member, id ) => {
                                        return <Member 
                                                key={id}
                                                img={member.img}
                                                name={member.name}
                                                post={member.post}
                                        />
                                })
                        }
                </div>

                </section>
        );
}
 
export default Team;