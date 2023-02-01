import React, {useEffect, useState} from "react";
import './ServicemanScooterPanel.sass';
import {Map} from "../../Map/Map";
import axios from "axios";
import {NonfunctionalScooter} from "./NonfunctionalScooter/NonfunctionalScooter";


export interface NonfunctionalScooterItem {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: number[],
    reportReason: string
}


export function ServicemanScooterPanel() {
    const [scooters, setScooterList] = useState<NonfunctionalScooterItem[]>();
    const [selectedScooter, setSelectedScooter] = useState<NonfunctionalScooterItem>();

    useEffect(() => {
        axios.get('http://localhost:8080/api/serviceman/scooter/list?userName=serviceman').then(response => {
            let newScooterList: NonfunctionalScooterItem[] = []
            for(const scooter of response.data) {
                let newScooter: NonfunctionalScooterItem = {
                    id: scooter.scooter.serialNumber,
                    name: scooter.scooter.model,
                    batteryLevel: scooter.scooter.scooterStatus.remainingBatteryPercent,
                    isActive: false,
                    position: [Number(scooter.scooter.scooterStatus.locLat), Number(scooter.scooter.scooterStatus.locLength)],
                    reportReason: scooter.reason
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
                    <NonfunctionalScooter id={scooter.id} name={scooter.name} batteryLevel={scooter.batteryLevel} isActive={scooter.isActive} position={scooter.position} reportReason={scooter.reportReason} setSelectedScooter={setSelectedScooter}/>
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
        </div>
    )
}