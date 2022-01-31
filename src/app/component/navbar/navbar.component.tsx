import React from 'react';
import { monteCinemaLogo } from './monteCinemaLogo';
import './navbar.component.scss';

export function NavBar(): JSX.Element {
    return (
        <nav className="nav-bar">
            <figure className="logo">{monteCinemaLogo}</figure>
            <div className="btns-container">
                <button
                    className="btn btn-white"
                    onClick={() => console.log('register on click')}
                >
                    Register
                </button>
                <button
                    className="btn btn-contrast"
                    onClick={() => console.log('login on click')}
                >
                    Login
                </button>
            </div>
        </nav>
    );
}
