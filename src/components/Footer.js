import React from "react";

const styles = {
    copyright:{
        color:"gray"
    }
}

const Footer = () =>

    <nav className="fixed-bottom navbar-dark bg-dark">
        <p className="text-center pb-0 mb-0" style={styles.copyright}>©TJCooper2018</p>
    </nav>

export default Footer;