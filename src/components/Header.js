import React from 'react';

const Header = props =>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">React Click Game<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item navbar-text justify-content-center">
                            <h4>Click an image to begin</h4>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item navbar-text justify-content-end">
                            <h4>Current Score: 0 | High Score: 0</h4>
                        </li>
                    </ul>
            </nav>

export default Header;