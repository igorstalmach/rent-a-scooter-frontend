import React, {useEffect, useState} from "react";
import './UserScooterPanel.sass';
import {Scooter} from "./Scooter/Scooter";
import {RentButton} from "./RentButton/RentButton";
import {Map} from "../../Map/Map";
import axios from "axios";


export interface RentedScooterItem {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: number[],
}


export function UserScooterPanel() {
    const [scooters, setScooterList] = useState<RentedScooterItem[]>();
    const [selectedScooter, setSelectedScooter] = useState<RentedScooterItem>();

    useEffect(() => {
        axios.get('http://localhost:8080/api/scooter/list').then(response => {
            let newScooterList: RentedScooterItem[] = [];
            for(const scooter of response.data) {
                let newScooter: RentedScooterItem = {
                    id: scooter.serialNumber,
                    name: scooter.model,
                    batteryLevel: scooter.scooterStatus.remainingBatteryPercent,
                    isActive: false,
                    position: [Number(scooter.scooterStatus.locLat), Number(scooter.scooterStatus.locLength)]
                };
                newScooterList.push(newScooter)
            }
            setScooterList(newScooterList);
        })
    }, [])

    function chooseScooter(): JSX.Element[] | undefined {
            return scooters?.map(scooter => {
                scooter.isActive = checkIfActive(scooter.id);
                return <li key={scooter.id}>
                    <Scooter id={scooter.id} name={scooter.name} batteryLevel={scooter.batteryLevel} isActive={scooter.isActive} position={scooter.position} setSelectedScooter={setSelectedScooter}/>
                </li>
        });
    }

    function checkIfActive(newId: number): boolean {
        return selectedScooter?.id === newId;
    }

    return (
        <div className='scooter-panel-container'>
            { scooters !== undefined ? <Map scooters={scooters} selectedScooter={selectedScooter}/> : null}
            <div className='chooser-container'>
                <ul>
                    {chooseScooter()}
                </ul>
            </div>
            <div className={'rent-button'}>
                { selectedScooter !== undefined ? <RentButton selectedScooter={selectedScooter}/> : null}
            </div>
        </div>
    )
}