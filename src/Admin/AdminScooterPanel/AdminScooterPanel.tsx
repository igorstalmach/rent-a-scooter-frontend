import React, {useEffect, useState} from "react";
import './AdminScooterPanel.sass';
import {Map} from "../../Map/Map";
import axios from "axios";
import {AdminScooter} from "./AdminScooter/AdminScooter";
import {Link} from "react-router-dom";



export interface AdminScooterItem {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: number[],
    state: string
}


export function AdminScooterPanel() {
    const [scooters, setScooterList] = useState<AdminScooterItem[]>();
    const [selectedScooter, setSelectedScooter] = useState<AdminScooterItem>();

    useEffect(() => {
        axios.get('http://192.168.1.142:8080/api/serviceman/scooter/list/all?userName=serviceman').then(response => {
            let newScooterList: AdminScooterItem[] = []
            for(const scooter of response.data) {
                let newScooter: AdminScooterItem = {
                    id: scooter.serialNumber,
                    name: scooter.model,
                    batteryLevel: scooter.scooterStatus.remainingBatteryPercent,
                    isActive: false,
                    position: [Number(scooter.scooterStatus.locLat), Number(scooter.scooterStatus.locLength)],
                    state: scooter.isHidden
                };
                newScooterList.push(newScooter)
            }
            setScooterList(newScooterList);
        })
    }, [])

    function viewScooters(): JSX.Element[] | undefined {
            return scooters?.map(scooter => {
                scooter.isActive = checkIfActive(scooter.id);
                return <li key={scooter.id}>
                    <AdminScooter id={scooter.id} name={scooter.name} batteryLevel={scooter.batteryLevel} isActive={scooter.isActive} position={scooter.position} state={scooter.state} setSelectedScooter={setSelectedScooter}/>
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
                    {viewScooters()}
                </ul>
            </div>
            <div className='admin-button-container'>
                <Link to={'/admin/add-scooter'}><button>Dodaj hulajnogę</button></Link>
            </div>
        </div>
    )
}