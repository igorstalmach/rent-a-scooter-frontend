import React, {useState} from "react";
import './UserPanel.sass';
import {AddMoney} from "./AddMoney/AddMoney";

interface Props {
    balance: number
}

export function UserPanel(props: Props) {
    const [showAddMoney, setShowAddMoney] = useState<boolean>(false);

    function toggleShowAddMoney(): void {
        setShowAddMoney(!showAddMoney);
    }

    return(
        <>
            <div className='user-panel-container'>
                <p id='user-balance-display'>{props.balance < 9999 ? props.balance : String(props.balance).slice(0, 5) + ".."}PLN</p>
                <p id='user-balance-text'>Stan konta</p>
                <button onClick={toggleShowAddMoney} id='user-add-money'>+ Doładuj konto</button>
            </div>
            { showAddMoney ? <AddMoney/> : null }
        </>
    );
}