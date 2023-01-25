import {MapContainer, Popup, TileLayer, Marker} from 'react-leaflet';
import './Map.sass';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {ScooterItem, RentedScooterItems} from "../ScooterPanel";
import {SetCenter} from "./SetCenter/SetCenter";

let DefaultIcon = L.icon({
    iconUrl: require('../../Assets/scooter-marker.png'),
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
    scooters: RentedScooterItems,
    selectedScooter: ScooterItem | undefined
}

export function Map(props: Props) {
    function displayScooters(): JSX.Element[] {
        return props.scooters.scooterList.map(scooter => {
            return (
                <Marker position={[scooter.position[0], scooter.position[1]]}>
                    <Popup>
                        {scooter.name}
                    </Popup>
                </Marker>
            )
        })
    }

    return(
        <div className='container-map'>
            <MapContainer style={{ height: '95%', width: '95%' }} center={[51.110, 17.06]} zoom={15} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {displayScooters()}
                { props.selectedScooter !== undefined ? <SetCenter selectedScooter={props.selectedScooter}/> : null}
            </MapContainer>
        </div>
    );
}