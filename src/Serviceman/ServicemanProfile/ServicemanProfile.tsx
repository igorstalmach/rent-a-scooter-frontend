import React from "react";
import './ServicemanProfile.sass';
import {Link} from "react-router-dom";

export function ServicemanProfile() {
    return(
        <div className='logout-button'>
           <Link to={'/'}><button>Logout</button></Link>
        </div>
    );
}