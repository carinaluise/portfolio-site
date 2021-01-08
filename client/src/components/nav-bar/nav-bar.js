import React from 'react';
import NavLink from '../nav-link/nav-link';
import './nav-bar.scss';


class NavBar extends React.Component{
    constructor(){
        super();
        this.state ={
            isNavbarOpen: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);

    }

    toggleNavbar= () =>{
        this.setState(prevState => ({
            isNavbarOpen: !prevState.isNavbarOpen
            
        }))
    }


render(){
    const {isNavbarOpen} = this.state
        return (
            <div className="nav-container">
                <a className="icon-white" href="/#home"><img src="../../../computer-icon.svg" alt="icon"></img></a>
                <img onClick={this.toggleNavbar} className="icon-black" src="../../../computer-icon-black.svg" alt="icon"></img>
                <div className="nav-links-container">
                    <NavLink class={isNavbarOpen ? "active" : "closed"} link="/#home" linkName="home"></NavLink>
                    <NavLink class={isNavbarOpen ? "active" : "closed"} link="/#portfolio" linkName="portfolio"></NavLink>
                    <NavLink class={isNavbarOpen ? "active" : "closed"} link="/#tech" linkName="tech"></NavLink>
                    <NavLink class={isNavbarOpen ? "active" : "closed"} link="/#contact" linkName="contact"></NavLink>
                </div>   
            </div>
        )
    }
}

export default NavBar;