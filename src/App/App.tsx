import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Login} from "../Login/Login";
import {UserIcon} from "../User/UserIcon/UserIcon";
import {PanelChooser} from "./Chooser/PanelChooser";
import {ProfileChooser} from "./Chooser/ProfileChooser";
import './App.sass';
import {AddScooter} from "../Admin/AdminScooterPanel/AddScooter/AddScooter";

export function App() {
    const [login, setLogin] = useState<string>('customer');

    return (
        <div className='container'>
            <Link to={'/rent'} className='link-container'><img className='logo' src={require('../Assets/logo.png')} alt={'Rent a scooter logo'}/></Link>
            <UserIcon />
            <Routes>
                <Route path='/' element={<Login setLogin={setLogin} />} />
                <Route path='/rent' element={<PanelChooser login={login}/>} />
                <Route path='/user-profile' element={<ProfileChooser login={login}/>} />
                {login === 'admin' ? <Route path={'/admin/add-scooter'} element={<AddScooter/>}/> : null}
            </Routes>
        </div>
    );
}