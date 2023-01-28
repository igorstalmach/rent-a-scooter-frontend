import React from "react";
import './AdminProfile.sass';
import {Link} from "react-router-dom";

export function AdminProfile() {
    return(
        <div className='logout-button'>
           <Link to={'/'}><button>Logout</button></Link>
        </div>
    );
}