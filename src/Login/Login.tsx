import './Login.sass';
import React from "react";
import {useNavigate} from "react-router-dom";


interface Props {
    setLogin: React.Dispatch<React.SetStateAction<string>>
}


export function Login(props: Props) {
    const navigate = useNavigate();

    function handleClick(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        props.setLogin(document.getElementsByTagName("input")[0].value);
        navigate('/rent');
    }

    return(
        <div className='login-container'>
            <label>
                <p className='login-text'>Login</p>
                <input type='text' required/>
            </label>
            <label>
                <p className='login-text'>Hasło</p>
                <input type='password' required/>
            </label>
            <br></br>
            <button className='login-button' onClick={e => handleClick(e)}>Zaloguj</button>
        </div>
    );
}