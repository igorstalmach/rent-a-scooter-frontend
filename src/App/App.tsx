import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {UserProfile} from "../UserProfile/UserProfile";
import './App.sass';
import {UserIcon} from "../UserIcon/UserIcon";
import {ScooterPanel} from "../ScooterPanel/ScooterPanel";

export function App() {
    return (
        <div className='container'>
            <Link to={'/'} className='link-container'><img className='logo' src={require('../Assets/logo.png')} alt={'Rent a scooter logo'}/></Link>
            <UserIcon />
            <Routes>
                <Route path='/' element={<ScooterPanel />} />
                <Route path='/user-profile' element={<UserProfile />} />
            </Routes>
        </div>
    );
}