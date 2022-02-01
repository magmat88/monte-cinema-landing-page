import React from 'react';
import { monteCinemaLogo } from './monteCinemaLogo';
import './navbar.component.scss';

export function NavBar(): JSX.Element {
    return (
        <nav className="navbar">
            <figure className="navbar__logo">{monteCinemaLogo}</figure>
            <div className="navbar__btns--large-display">
                <button
                    className="navbar__btn--white"
                    onClick={() => console.log('register on click')}
                >
                    Register
                </button>
                <button
                    className="navbar__btn--contrast"
                    onClick={() => console.log('login on click')}
                >
                    Login
                </button>
            </div>
        </nav>
    );
}
