import './RentedScooter.sass';
import '../../../ScooterPanel/Scooter/Scooter.sass'
import React from "react";
import axios from "axios";

interface Props {
    id: number,
    name?: string,
    batteryLevel?: string,
    elapsedTime: number,
    price?: number
}

export function RentedScooter(props: Props) {
    const handleHandoverSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const postData = {
            "userName": "customer",
            "serialNumber": String(props.id)
        }

        axios.patch("http://192.168.1.142:8080/api/scooter/rental", postData).then(response => {
            window.location.reload();
        })
    }

    return(
        <div className='rented-scooter-container'>
            <img className='rented-scooter-icon' src={require('../../../Assets/scooter-icon.png')} alt='Scooter icon'/>
            <div className='scooter-text-container' id='rented-scooter-text'>
                <p className='scooter-text'>{props.name}</p>
                <div className='rented-scooter-text-container'>
                    <p className='rented-scooter-text'>Czas: {props.elapsedTime.toFixed(2)} min</p>
                    <p className='rented-scooter-text'>Koszt: {props.price} PLN</p>
                </div>
            </div>
            <div className='button-container'>
                <button className='rented-scooter-button' onClick={(e) => handleHandoverSubmit(e)}>Zakończ przejazd</button>
                <button className='rented-scooter-button'>Zgłoś</button>
            </div>
        </div>
    );
}