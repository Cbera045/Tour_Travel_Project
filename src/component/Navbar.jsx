import React from "react";
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HotelIcon from '@material-ui/icons/Hotel';
import CollectionsRoundedIcon from '@material-ui/icons/CollectionsRounded';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';




const Navbar=()=>{
    return(
        <>
            <nav className="nav">
                <div className="text">
                <img src="logo.png" />
                <h2>
                        TRAVEL
                        <span className="span">THE</span>
                        WORLD
                </h2>
                </div>
                <div className="ancer">
                <ul>
                    <li>
                        <a href="#"><HomeIcon /></a>
                    </li>
                    <li>
                        <a href="#"><PermContactCalendarIcon /></a>
                    </li>
                    <li>
                        <a href="#"><HotelIcon /></a>
                    </li>
                    <li>
                        <a href="#"><CollectionsRoundedIcon /></a>
                    </li>
                    <li>
                        <a href="#"><InfoIcon /></a>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;