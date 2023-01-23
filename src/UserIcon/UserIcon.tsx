import React from "react";
import './UserIcon.sass';
import {Link} from "react-router-dom";

export function UserIcon() {
    return(
        <div className='user-icon-container'>
             <Link to='/user-profile'><img src={require('../Assets/user-icon.png')} alt='User profile' className='user-icon'/></Link>
        </div>
    );
}