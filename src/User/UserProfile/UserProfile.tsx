import React, {useEffect, useState} from "react";
import './UserProfile.sass';
import {UserPanel} from "./UserPanel/UserPanel";
import {RentedScooters} from "./RentedScooters/RentedScooters";
import axios from "axios";
import {Link} from "react-router-dom";


export interface RentedScooterItem {
    id: number,
    name: string,
    batteryLevel: string,
    rentalTime: number,
    price: number
}


export function UserProfile() {
    const [balance, setBalance] = useState<number>(0);
    const [rentedScooters, setRentedScooters] = useState<RentedScooterItem[]>();

    useEffect(() => {
        axios.get('http://192.168.1.142:8080/api/user/info?userName=customer').then(response => {
            setBalance(response.data.balance);
            let newRentedScooterList: RentedScooterItem[] = [];
            for(const scooter of response.data.rentedScooters) {
                let newScooter: RentedScooterItem = {
                    id: scooter.serialNumber,
                    name: scooter.model,
                    batteryLevel: scooter.remainingBatteryPercent,
                    rentalTime: scooter.secondsOfRental,
                    price: scooter.price
                };
                newRentedScooterList.push(newScooter);
            }
            setRentedScooters(newRentedScooterList);
        })
    }, [])

    return(
        <div className='user-profile-container'>
            <p className='profile-greeting'>Dobry wieczór!</p>
            <UserPanel balance={balance}/>
            <RentedScooters rentedScooters={rentedScooters} setRentedScooters={setRentedScooters} />
            <div className='logout-button'>
               <Link to={'/'}><button>Logout</button></Link>
            </div>
        </div>
    );
}