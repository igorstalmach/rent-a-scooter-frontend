import React from "react";
import './RentButton.sass';

interface Props {
    selectedScooter: Object,
}

export function RentButton(props: Props) {
    function print(): void {
        console.log(props.selectedScooter);
    }

    return(
        <button onClick={print}>Wypożycz</button>
    );
}