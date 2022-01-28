import React from 'react';
import logo from '../../images/logo.svg';
import './navbar.component.scss';

export function NavBar(): JSX.Element {
    return (
        <nav className="nav-bar">
            <figure>
                <img src={logo} alt="monte cinema logo" />
            </figure>
            <div className="btns-container">
                <button onClick={() => console.log('register on click')}>
                    Register
                </button>
                <button onClick={() => console.log('login on click')}>
                    Login
                </button>
            </div>
        </nav>
    );
}
