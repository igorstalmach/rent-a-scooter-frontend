import React, {useEffect, useState} from "react";
import './UserProfile.sass';
import {UserPanel} from "./UserPanel/UserPanel";
import {RentedScooters} from "./RentedScooters/RentedScooters";
import axios from "axios";

export interface RentedScooterItem {
    id: number,
    name: string,
    batteryLevel: string,
    elapsedTime: number,
    price: number
}

export interface RentedScooterItems {
    rentedScooterList: RentedScooterItem[],
}

export function UserProfile() {
    const [balance, setBalance] = useState<number>(1500);
    const [rentedScooters, setRentedScooters] = useState<RentedScooterItems>();

    useEffect(() => {
        axios.get('../../user.json').then(response => {
            setBalance(response.data.user.balance);
            let newRentedScooterList: RentedScooterItems = {
                rentedScooterList: []
            };
            for(const scooter of response.data.user.rentedScooterList) {
                let newScooter: RentedScooterItem = {
                    id: scooter.id,
                    name: scooter.name,
                    batteryLevel: scooter.batteryLevel,
                    elapsedTime: scooter.elapsedTime,
                    price: scooter.price
                };
                newRentedScooterList.rentedScooterList.push(newScooter)
            }
            setRentedScooters(newRentedScooterList);
        })
    }, [])

    return(
        <div className='user-profile-container'>
            <p className='profile-greeting'>Dobry wieczór!</p>
            <UserPanel balance={balance} setBalance={setBalance}/>
            <RentedScooters rentedScooters={rentedScooters} setRentedScooters={setRentedScooters} />
        </div>
    );
}