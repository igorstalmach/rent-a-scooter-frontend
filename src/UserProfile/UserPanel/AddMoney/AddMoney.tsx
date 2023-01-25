import React, {ChangeEvent} from "react";
import './AddMoney.sass';

interface Props {
    setBalance: React.Dispatch<React.SetStateAction<number | undefined>>
}

export function AddMoney(props: Props) {
    return(
        <div className={'add-money-container'}>
            <form>
                <label>
                    <p className='add-money-text'>Wpisz kwotę:</p>
                    <input type="number" onChange={(e) => props.setBalance(parseInt(e.currentTarget.value))} />
                </label>
            </form>
        </div>
    );
}