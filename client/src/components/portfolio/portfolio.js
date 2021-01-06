import React from 'react';
import './portfolio.scss';
import Card from '../card/card.js'


const Portfolio = () => {
    return(<div id="portfolio">
    <div className="section-title"><h1>Projects</h1></div>
    <div className="portfolio-card-container">
        <Card 
        link="https://green-for-growth.herokuapp.com/"
        title="Green for growth"
        information=""
        src="../../../green-for-growth-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://shop-of-strings.herokuapp.com/"
        title="Shop of Strings"
        information=""
        src="../../../shop-of-strings-500.png"
        alt="coding"
        >       
        </Card>
        <Card
        link="https://online-journal-lts.herokuapp.com/"
        title="Journal App"
        information=""
        src="../../../journal-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://tindog-example.herokuapp.com/"
        title="Tindog"
        information="Design example"
        src="../../../tindog-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://carinaluise.github.io/3D_Card/"
        title="3D Card"
        information=""
        src="../../../3D-Card-500.png"
        alt="coding"
        >       
        </Card>
        <Card 
        link="https://carinaluise.github.io/monsters-app/"
        title="Monsters Roledex"
        information=""
        src="../../../monsters-roledex-500.png"
        alt="coding"
        >       
        </Card>   
    </div>
    </div>);
}

export default Portfolio;