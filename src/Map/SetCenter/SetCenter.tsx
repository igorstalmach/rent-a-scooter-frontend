import {useMapEvent} from "react-leaflet";
import {RentedScooterItem} from "../../User/UserScooterPanel/UserScooterPanel";

interface Props {
    selectedScooter: RentedScooterItem
}

export function SetCenter(props: Props) {
    const map = useMapEvent('click', () => {
        map.panTo([props.selectedScooter.position[0], props.selectedScooter.position[1]])
    })

    return null
}