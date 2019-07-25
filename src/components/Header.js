import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";
class Header extends React.Component {

        showMenu(){
                document.querySelector('.fade').classList.remove('fade-hidden');
                document.querySelector('.mobile-menu').style.transform = 'translateX(0%)';
                document.querySelector('.fa-times').style.display = 'inline';
                document.querySelector('.fa-bars').style.opacity = '0';
                document.querySelector('body').style.overflowY = 'hidden';
        }



        componentDidMount(){
                const header = document.querySelector('.main-header');
                const menu_items = document.querySelectorAll('.menu li span');

                window.addEventListener('scroll', () => {
                        if(window.scrollY > 2){
                                header.classList.add('scroll-header');
                                menu_items.forEach((item) => {
                                        item.style.color = "var(--royal-blue)";
                                        item.addEventListener('mouseover', () => {
                                                item.style.color = "var(--main-green)";
                                        })
                                        item.addEventListener('mouseout', () => {
                                                item.style.color = "var(--royal-blue)";
                                        })
                                })
                        }else{
                                header.classList.remove('scroll-header');
                                menu_items.forEach((item) => {
                                        item.style.color = "#fff";
                                        item.addEventListener('mouseover', () => {
                                                item.style.color = "var(--main-green)";
                                        })
                                        item.addEventListener('mouseout', () => {
                                                item.style.color = "#fff";
                                        })
                                })
                        }
                })

        }
        render(){
                return (
                        <header className="main-header">
                                <div className="logo">
                                        <a href='/' style={{textDecoration: 'none', color: '#000'}}>..<span>Admirer</span></a>
                                </div>
                                        <nav className='nav'>
                                                <ul className="menu">
                                                        <Link to="/">
                                                                <li>
                                                                        <span className='active'>Home</span>
                                                                </li>
                                                        </Link>
                                                        <Link to="/about_us/">
                                                                <li>
                                                                        <span>About Us</span>
                                                                </li>
                                                        </Link>
                                                        <Link to="/services/">
                                                                <li>
                                                                        <span>Services</span>
                                                                </li>
                                                        </Link>
                                                        <Link to="/portfolio/">
                                                                <li>
                                                                        <span>Portfolio</span>
                                                                </li>
                                                        </Link>
                                                        <Link to="/contact/">
                                                                <li>
                                                                        <span>Contact</span>
                                                                </li>
                                                        </Link>
                                                </ul>
                                                <div className='mobile-menu-icon'>
                                                        <i className="fas fa-bars" onClick={() => this.showMenu()}></i>
                                                </div>
                                        </nav>
                        </header>
        );
        }
}
 
export default Header;