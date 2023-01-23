import React from "react";
import {useMapEvent} from "react-leaflet";

interface Props {
    currPos: any
}

export function SetCenter(props: Props) {
    const map = useMapEvent('click', () => {
        map.panTo([props.currPos.lat, props.currPos.len])
    })

    return null
}