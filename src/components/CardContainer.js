// will import Header into CardContainer to pass in the state of the score to let Header handle it as props
import React, { Component } from 'react';
import Header from './Header';

class CardContainer extends Component {
    render(){
        return(
        <Header />
        );
    }






}

export default CardContainer;