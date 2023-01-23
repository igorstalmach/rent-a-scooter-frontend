import React from "react";
import './RentedScooters.sass';
import {RentedScooter} from "./RentedScooter/RentedScooter";
import {RentedScooterItems} from "../UserProfile";

interface Props {
    rentedScooters: RentedScooterItems | undefined,
    setRentedScooters: React.Dispatch<React.SetStateAction<RentedScooterItems | undefined>>
}

export function RentedScooters(props: Props) {
    function showRentedScooters(): JSX.Element[] | undefined {
        return props.rentedScooters?.rentedScooterList.map(scooter => {
            return <li key={scooter.id}>
                <RentedScooter id={scooter.id} name={scooter.name} batteryLevel={scooter.batteryLevel} elapsedTime={scooter.elapsedTime} price={scooter.price}/>
            </li>
        });
    }

    return(
        <div className='rented-scooters-container'>
            <ul>
                {showRentedScooters()}
            </ul>
        </div>
    );
}