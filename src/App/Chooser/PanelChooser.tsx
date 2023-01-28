import React from "react";
import {UserScooterPanel} from "../../User/UserScooterPanel/UserScooterPanel";
import {ServicemanScooterPanel} from "../../Serviceman/ServicemanScooterPanel/ServicemanScooterPanel";
import {AdminScooterPanel} from "../../Admin/AdminScooterPanel/AdminScooterPanel";


interface Props {
    login: string
}


export function PanelChooser(props: Props) {
    function choosePanel() {
        if (props.login === 'serviceman') {
            return (
                <ServicemanScooterPanel/>
            );
        } else if (props.login === 'admin') {
            return(
                <AdminScooterPanel />
            );
        } else {
            return(
                <UserScooterPanel />
            );
        }
    }

    return(
        <>
            {choosePanel()}
        </>
    );
}