import './NonfunctionalScooter.sass';
import {NonfunctionalScooterItem} from "../ServicemanScooterPanel";
import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface Props {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: number[],
    reportReason: string,
    setSelectedScooter: React.Dispatch<React.SetStateAction<NonfunctionalScooterItem | undefined>>
}

export function NonfunctionalScooter(props: Props) {
    const navigate = useNavigate();

    function handleRestoreSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        axios.delete("http://192.168.1.142:8080/api/serviceman/scooter?userName=serviceman&serialNumber="+String(props.id)).then(response => {
            navigate('/user-profile');
        })
    }

    return(
        <div className='nf-scooter-container' onClick={() => props.setSelectedScooter({id: props.id, name: props.name, batteryLevel: props.batteryLevel, isActive: true, position: props.position, reportReason: props.reportReason})}>
            <img className='nf-scooter-icon' src={require('../../../Assets/scooter-icon.png')} alt='Scooter icon'/>
            <div className={'nf-scooter-text-container'}>
                <p className='nf-scooter-text'>{props.name}</p>
                <div className='nf-battery'>
                    <img src={require('../../../Assets/battery-icon.png')} alt='Scooter battery icon' className='nf-battery-icon'/>
                    <p className='nf-scooter-text'>{props.batteryLevel}%</p>
                </div>
            </div>
            <button className='nf-scooter-button' onClick={(e) => handleRestoreSubmit(e)}>Przywróć</button>
            <p className='nf-scooter-text-reason'>Powód: {props.reportReason}</p>
        </div>
    );
}