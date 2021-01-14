import React from 'react';
import './portfolio.scss';
import Card from '../card/card.js'


const Portfolio = () => {
    return(<div id="portfolio">
    <div className="section-title"><h1>Projects</h1></div>
    <div className="portfolio-card-container">
        <Card 
        link="https://shop-of-strings.herokuapp.com/"
        title="Shop of Strings"
        information="Full E-Commerce website selling all things string."
        src="../../../shop-of-strings-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        // light
        link="https://green-for-growth.herokuapp.com/"
        title="Green for growth"
        information="A vegan's dream. Search for yum recipes to cook tonight."
        src="../../../green-for-growth-500.png"
        alt="coding"
        >       
        </Card>
        <Card
       
        link="https://online-journal-lts.herokuapp.com/"
        title="Journal App"
        information="An app to journal out your thoughts and feelings."
        src="../../../journal-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://carinaluise.github.io/tindog/"
        title="Tindog"
        information="A website design example for a doggy dating app."
        src="../../../tindog-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        // light
        link="https://carinaluise.github.io/3D_Card/"
        title="3D Card"
        information="3D design work for cards."
        src="../../../3D-Card-500.png"
        alt="coding"
        >       
        </Card>
        {/* <Card 
        link="https://carinaluise.github.io/monsters-app/"
        title="Monsters Roledex"
        information="Search through the monsters API to find different characters."
        src="../../../monsters-roledex-500.png"
        alt="coding"
        >       
        </Card>    */}
    </div>
    </div>);
}

export default Portfolio;