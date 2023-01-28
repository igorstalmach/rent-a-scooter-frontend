import React from "react";
import {UserProfile} from "../../User/UserProfile/UserProfile";
import {ServicemanProfile} from "../../Serviceman/ServicemanProfile/ServicemanProfile";
import {AdminProfile} from "../../Admin/AdminProfile/AdminProfile";


interface Props {
    login: string
}


export function ProfileChooser(props: Props) {
    function choosePanel() {
        if (props.login === 'serviceman') {
            return (
                <ServicemanProfile/>
            );
        } else if (props.login === 'admin') {
            return (
                <AdminProfile />
            );
        } else {
            return(
                <UserProfile />
            );
        }
    }

    return(
        <>
            {choosePanel()}
        </>
    );
}