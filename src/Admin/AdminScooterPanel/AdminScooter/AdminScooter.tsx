import './AdminScooter.sass';
import React from "react";
import axios from "axios";
import {AdminScooterItem} from "../AdminScooterPanel";
import {useNavigate} from "react-router-dom";

interface Props {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: number[],
    state: boolean,
    setSelectedScooter: React.Dispatch<React.SetStateAction<AdminScooterItem | undefined>>
}

export function AdminScooter(props: Props) {
    const navigate = useNavigate();

    function handleDeleteSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        axios.delete("http://localhost:8080/api/admin/scooter?userName=admin&serialNumber="+String(props.id)).then(response => {
            navigate('/user-profile');
        })
    }

    return(
        <div className='nf-scooter-container' onClick={() => props.setSelectedScooter({id: props.id, name: props.name, batteryLevel: props.batteryLevel, isActive: true, position: props.position, state: props.state})}>
            <img className='nf-scooter-icon' src={require('../../../Assets/scooter-icon.png')} alt='Scooter icon'/>
            <div className={'nf-scooter-text-container'}>
                <p className='nf-scooter-text'>{props.name}</p>
                <div className='nf-battery'>
                    <img src={require('../../../Assets/battery-icon.png')} alt='Scooter battery icon' className='nf-battery-icon'/>
                    <p className='nf-scooter-text'>{props.batteryLevel}%</p>
                </div>
            </div>
            <button className='nf-scooter-button' onClick={(e) => handleDeleteSubmit(e)}>Usuń</button>
            <p className='nf-scooter-text-reason'>Stan: {!props.state ? 'Widoczna' : 'Ukryta'}</p>
        </div>
    );
}