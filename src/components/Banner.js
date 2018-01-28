import React from 'react';

const styles = { 
    backgroundImg:{
        "backgroundColor":"linear-gradient(rgba(0,0,0,0.3), rgba(255,255,255,0.5))",
        "backgroundImage": "url('/assets/images/mario.jpeg')",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "marginBottom":"2px"
    },
    text:{
        color: "black",
        'textShadow': "2px 2px 1px white",
        fontFamily:"'Eczar', serif"
    },
    smalltext:{
        color:"black",
        fontFamily:"'Eczar',serif",
        textShadow: "0.6px 0.6px 1px white"
    }
};

const Banner = () =>

    <div className="jumbotron jumbotron-fluid backgroundImg" style={styles.backgroundImg}>
        <div className="container">
            <h1 className="display-4 text-center" style={styles.text}>Super Smash Memory Game</h1>
            <h4 className="text-center" style={styles.smalltext}>Click all of the images only once!</h4>
        </div>
    </div>

export default Banner;
