import React from "react";
import './RentButton.sass';
import axios from "axios";
import {RentedScooterItem} from "../UserScooterPanel";
import {useNavigate} from "react-router-dom";

interface Props {
    selectedScooter: RentedScooterItem,
}

export function RentButton(props: Props) {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const postData = {
            "userName": "customer",
            "serialNumber": String(props.selectedScooter.id)
        }

        axios.post("http://192.168.1.142:8080/api/scooter/rental", postData).then(response => {
            navigate('/user-profile');
        })
    }


    return(
        <button onClick={(e) => handleSubmit(e)} type='submit'>Wypożycz</button>
    );
}