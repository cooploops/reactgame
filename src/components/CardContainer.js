// will import Header into CardContainer to pass in the state of the score to let Header handle it as props
import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';

class CardContainer extends Component {
    state = {
        currentScore: 0,
        highScore: 0,
        cardsClicked: []
    };
    
    
    
    
    
    
    
    
    
    
    render(){
        return (
        
        <div>
            <Header />
            <Banner />
        </div>
        );
    }
}

export default CardContainer;