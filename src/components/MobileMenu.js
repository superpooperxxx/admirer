import React from 'react';

const MobileMenu = () => {

        const hideMenu = () => {
                setTimeout(() => {
                        document.querySelector('.fade').classList.add('fade-hidden');
                }, 700)
                document.querySelector('.mobile-menu').style.transform = 'translateX(-100%)';
                document.querySelector('.fa-times').style.display = 'none';
                document.querySelector('.fa-bars').style.opacity = '1';
                document.querySelector('body').style.overflowY = 'visible';
        }

        return (

        <nav className='mobile'>
                <div className='fade fade-hidden'></div>
                <ul className="mobile-menu">
                        <li>
                                <a className="mobile-menu-item" href="/" onClick={hideMenu}><span>Home</span></a>
                        </li>
                        <li>
                                <a className="mobile-menu-item" href="/about_us/" onClick={hideMenu}>About Us</a>
                        </li>
                        <li>
                                <a className="mobile-menu-item" href="/services/" onClick={hideMenu}>Services</a>
                        </li>
                        <li>
                                <a className="mobile-menu-item" href="/portfolio/" onClick={hideMenu}>Portfolio</a>
                        </li>
                        <li>
                                <a className="mobile-menu-item" href="/contact/" onClick={hideMenu}>Contact</a>
                        </li>
                </ul>
                <i className="fas fa-times" onClick={hideMenu}></i>
        </nav>
        );
}
 
export default MobileMenu;