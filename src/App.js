import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';


export default class App extends React.Component{
  state = {
    scroll: false
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 2){
        this.setState({scroll: true});
      }else{
        this.setState({scroll: false});
      }
    })
  }
  render(){
    return (
      <>
      <Router>
        <MobileMenu />
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about_us/' exact component={AboutUs}/>
          <Route path='/services/' exact component={Services}/>
          <Route path='/portfolio/' exact component={Portfolio}/>
          <Route path='/contact/' exact component={Contact}/>
          <Route component={Error}/>
        </Switch>
        <Footer />
      </Router>
      </>
    )
  }
}

