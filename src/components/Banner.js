import React from 'react';

const styles = {
    backgroundImg:{
        "background-color":"linear-gradient(rgba(0,0,0,0.3), rgba(255,255,255,0.5))",
        "background-image": "url('/assets/images/mario.jpeg')",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center center"
    },
    text:{
        color: "black",
        'text-shadow': "2px 2px 5px white"
    }
};

const Banner = () =>

    <div className="jumbotron jumbotron-fluid" style={styles.backgroundImg}>
        <div className="container">
            <h1 className="display-4 text-center" style={styles.text}>Super Click Game</h1>
            <p className="lead text-center" style={styles.text}>Click all images only once!</p>
        </div>
    </div>

export default Banner;
