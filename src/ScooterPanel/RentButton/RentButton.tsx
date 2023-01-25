import React from "react";
import './RentButton.sass';
import axios from "axios";
import {ScooterItem} from "../ScooterPanel";

interface Props {
    selectedScooter: ScooterItem,
}

export function RentButton(props: Props) {
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const postData = {
            "userName": "customer",
            "serialNumber": String(props.selectedScooter.id)
        }

        axios.post("http://192.168.1.142:8080/api/scooter/rental", postData).then(response => {
            console.log(response);
            window.location.reload();
        })
    }


    return(
        <button onClick={(e) => handleSubmit(e)} type='submit'>Wypożycz</button>
    );
}