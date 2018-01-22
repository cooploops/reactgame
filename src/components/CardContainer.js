// will import Header into CardContainer to pass in the state of the score to let Header handle it as props
import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Card from './Cards';

const portraits = [
    {
        "name": "Bowser",
        "image": "https://www.ssbwiki.com/images/thumb/6/68/Bowser_MP10.png/549px-Bowser_MP10.png"
    },
    {
        "name":"Captain Falcon",
        "image":"https://www.ssbwiki.com/images/7/74/GX_Captain_Falcon.png"
    },
    {
        "name": "Charizard",
        "image": "https://www.ssbwiki.com/images/9/96/CharizardArtwork.png"
    },
    {
        "name": "Cloud",
        "image": "https://www.ssbwiki.com/images/9/9e/Cloud_Strife.png"
    },
    {
        "name": "Diddy Kong",
        "image": "https://www.ssbwiki.com/images/f/f5/DiddyTropicalFreeze.png"
    },
    {
        "name": "Fox",
        "image": "https://www.ssbwiki.com/images/5/5a/SFZ_Fox_McCloud.png"
    },
    {
        "name": "Ike",
        "image": "https://www.ssbwiki.com/images/5/52/FERD_Ike.png"
    },
    {
        "name": "Kirby",
        "image": "https://www.ssbwiki.com/images/f/f9/Kirby_KTD.png"
    },
    {
        "name": "Link",
        "image": "https://www.ssbwiki.com/images/a/a8/Link_Artwork.png"
    },
    {
        "name": "Luigi",
        "image": "https://www.ssbwiki.com/images/5/5c/Luigi_MP10.png"
    },
    {
        "name": "Mario",
        "image": "https://www.ssbwiki.com/images/7/7c/Mario_MP10.png"
    },
    {
        "name": "Yoshi",
        "image": "https://www.ssbwiki.com/images/2/2a/Yoshi_MP10.png"
    } 
];

class CardContainer extends Component {
    state = {
        currentScore: 0,
        highScore: 0,
        cardsClicked: []
    };
    
    
    
    
    handleOnClick = event => {
        console.log(event.target.name);
    }

    
    
    
    
    
    render(){
        return (
        <div>
            <Header />
            <Banner />
            <Card portraits={portraits}
            handleOnClick={this.handleOnClick}/>
        </div>
        );
    }
}

export default CardContainer;