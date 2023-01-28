import React, {ChangeEvent} from "react";
import './AddMoney.sass';
import axios from "axios";


export function AddMoney() {
    function handleAddMoneySubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()

        const postData = {
            "money": String(document.getElementsByTagName("input")[0].value),
            "userName": "customer"
        }

        axios.patch("http://192.168.1.142:8080/api/user/balance", postData).then(response => {
            window.location.reload();
        })
    }

    return(
        <div className={'add-money-container'}>
            <form>
                <label>
                    <p className='add-money-text'>Wpisz kwotę:</p>
                    <input type="number"/>
                    <button className='rented-scooter-button' id='add-money-button' onClick={(e) => handleAddMoneySubmit(e)}>Doładuj</button>
                </label>
            </form>
        </div>
    );
}