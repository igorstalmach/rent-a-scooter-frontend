import React, {useEffect, useState} from "react";
import './ScooterPanel.sass';
import {Scooter} from "./Scooter/Scooter";
import {RentButton} from "./RentButton/RentButton";
import {Map} from "./Map/Map";

export interface ScooterItem {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: any,
}

export interface RentedScooterItems {
    scooterList: ScooterItem[],
}

export function ScooterPanel() {
    const [scooters, setScooterList] = useState<RentedScooterItems>();
    const [selectedScooter, setSelectedScooter] = useState<ScooterItem>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../scooters.json');

                if (response.ok) {
                    return await response.json()
                }
                throw new Error('Request failed!');
            } catch (error) {
                console.log(error);
            }
        }

        fetchData().then(response => {
            let newScooterList: RentedScooterItems = {
                scooterList: []
            };
            for(const scooter of response.scooterList) {
                let newScooter: ScooterItem = {
                    id: scooter.id,
                    name: scooter.name,
                    batteryLevel: scooter.batteryLevel,
                    isActive: false,
                    position: scooter.position
                };
                newScooterList.scooterList.push(newScooter)
            }
            setScooterList(newScooterList);
        });
    });

    function chooseScooter(): JSX.Element[] | undefined {
            return scooters?.scooterList.map(scooter => {
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
            { scooters !== undefined ? <Map scooters={scooters} currPos={selectedScooter}/> : null}
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