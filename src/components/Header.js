import React from 'react';

const Header = props =>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">React Click Game<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item navbar-text justify-content-center">
                            <h4>Click any Image to begin!</h4>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item navbar-text justify-content-end">
                            {/* props will go in for the score to be dynamic */}
                            <h4>Current Score: {props.currentScore} | High Score: {props.highScore}</h4>
                        </li>
                    </ul>
            </nav>

export default Header;