import React from "react";
import axios from "axios";
import './AddScooter.sass';


export function AddScooter() {
    function handleClick(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        const postData = {
            "userName": "admin",
            "model": document.getElementsByTagName("input")[0].value ,
            "color": document.getElementsByTagName("input")[1].value ,
            "maxSpeed": document.getElementsByTagName("input")[2].value,
            "manufacturer": document.getElementsByTagName("input")[3].value,
            "serialNumber": document.getElementsByTagName("input")[4].value,
            "isHidden": document.getElementsByTagName("select")[0].value,
            "batteryMeters": document.getElementsByTagName("input")[5].value,
            "remainingBatteryPercent": document.getElementsByTagName("input")[6].value,
            "locLat": document.getElementsByTagName("input")[7].value,
            "locLength": document.getElementsByTagName("input")[8].value
        }

        console.log(postData);

        axios.post("http://192.168.1.142:8080/api/admin/scooter", postData).then(response => {
            window.location.reload();
        })
    }

    return(
         <div className='add-scooter-container'>
            <label>
                <p className='add-scooter-text'>Model</p>
                <input type='text' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Kolor</p>
                <input type='text' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Maksymalna prędkość</p>
                <input type='number' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Producent</p>
                <input type='text' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Numer seryjny</p>
                <input type='number' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Widoczność</p>
                <select id="visibility" name="visibility">
                    <option value="true">Tak</option>
                    <option value="false">Nie</option>
                </select>
            </label>
            <label>
                <p className='add-scooter-text'>Pozostała odległość [m]</p>
                <input type='number' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Procent baterii</p>
                <input type='number' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Szerokość geograficzna</p>
                <input type='number' required/>
            </label>
            <label>
                <p className='add-scooter-text'>Długość geograficzna</p>
                <input type='number' required/>
            </label>
            <br></br>
            <button className='add-scooter-button' onClick={e => handleClick(e)}>Dodaj hulajnogę</button>
        </div>
    );
}