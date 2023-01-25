import {useMapEvent} from "react-leaflet";
import {ScooterItem} from "../../ScooterPanel";

interface Props {
    selectedScooter: ScooterItem
}

export function SetCenter(props: Props) {
    const map = useMapEvent('click', () => {
        map.panTo([props.selectedScooter.position[0], props.selectedScooter.position[1]])
    })

    return null
}