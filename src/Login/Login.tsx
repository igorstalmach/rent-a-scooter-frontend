import './Login.sass';
import React from "react";
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';


interface Props {
    setLogin: React.Dispatch<React.SetStateAction<string>>
}


export function Login(props: Props) {
    const navigate = useNavigate();

    function handleClick(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        const loginValue = document.getElementsByTagName("input")[0].value;
        const passwordValue = document.getElementsByTagName("input")[1].value;

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        if (!(loginValue === "customer" || loginValue === "serviceman" || loginValue === "admin") || (!(passwordValue === "1234"))) {
            Toast.fire({
              title: 'Nieprawidłowe dane'
            })
        } else {
            props.setLogin(loginValue);
            navigate('/rent');
        }
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