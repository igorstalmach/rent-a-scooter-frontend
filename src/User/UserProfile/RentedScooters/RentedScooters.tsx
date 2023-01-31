import React from "react";
import './RentedScooters.sass';
import {RentedScooter} from "./RentedScooter/RentedScooter";
import {RentedScooterItem} from "../UserProfile";

interface Props {
    rentedScooters: RentedScooterItem[] | undefined,
    setRentedScooters: React.Dispatch<React.SetStateAction<RentedScooterItem[] | undefined>>
}

export function RentedScooters(props: Props) {
    function showRentedScooters(): JSX.Element[] | undefined {
        return props.rentedScooters?.map(scooter => {
            return <li key={scooter.id}>
                <RentedScooter id={scooter.id} elapsedTime={calculateTime(scooter.rentalTime)} price={scooter.price} name={scooter.name}/>
            </li>
        });
    }

    const calculateTime = (rentalTime: number) => {
        return rentalTime / 60;
    }

    return(
        <div className='rented-scooters-container'>
            <ul>
                {showRentedScooters()}
            </ul>
        </div>
    );
}