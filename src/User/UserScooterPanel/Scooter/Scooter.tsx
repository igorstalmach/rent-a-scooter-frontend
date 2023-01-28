import React, {useEffect, useState} from "react";
import './Scooter.sass';
import {RentedScooterItem} from "../UserScooterPanel";

interface Props {
    id: number,
    name: string,
    batteryLevel: string,
    isActive: boolean,
    position: any,
    setSelectedScooter: React.Dispatch<React.SetStateAction<RentedScooterItem | undefined>>,
}

export function Scooter(props: Props) {
    const [color, setColor] = useState<string>('#E5FAF7');

    useEffect(() => {
        if (props.isActive) {
            setColor('#BBD78C');
        } else {
            setColor('#E5FAF7');
        }
    }, [props.isActive])

    return(
        <div className='scooter-container' style={{background: color}} onClick={() => props.setSelectedScooter({id: props.id, name: props.name, batteryLevel: props.batteryLevel, isActive: true, position: props.position})}>
            <img className='scooter-icon' src={require('../../../Assets/scooter-icon.png')} alt='Scooter icon'/>
            <div className={'scooter-text-container'}>
                <p className='scooter-text'>{props.name}</p>
                <div className='battery'>
                    <img src={require('../../../Assets/battery-icon.png')} alt='Scooter battery icon' className='battery-icon'/>
                    <p className='scooter-text'>{props.batteryLevel}%</p>
                </div>
            </div>
        </div>
    );
}