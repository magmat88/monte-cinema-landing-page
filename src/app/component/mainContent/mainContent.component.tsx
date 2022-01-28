import React from 'react';
import { NavBar } from '../navbar/navbar.component';
import { OnlineBooking } from '../onlineBooking/onlineBooking.component';
import { SoonInTheCinema } from '../soonInTheCinema/soonInTheCinema.component';
import { Welcome } from '../welcome/welcome.component';
import './mainContent.component.scss';

export function MainContent(): JSX.Element {
    return (
        <div className="main-content">
            <NavBar />
            <Welcome />
            <SoonInTheCinema />
            <OnlineBooking />
        </div>
    );
}
