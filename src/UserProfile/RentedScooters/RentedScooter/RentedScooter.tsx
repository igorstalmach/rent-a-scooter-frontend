import './RentedScooter.sass';
import '../../../ScooterPanel/Scooter/Scooter.sass'

interface Props {
    id: number,
    name: string,
    batteryLevel: string,
    elapsedTime: number,
    price: number
}

export function RentedScooter(props: Props) {
    return(
        <div className='rented-scooter-container'>
            <img className='rented-scooter-icon' src={require('../../../Assets/scooter-icon.png')} alt='Scooter icon'/>
            <div className='scooter-text-container' id='rented-scooter-text'>
                <p className='scooter-text'>{props.name}</p>
                <div className='rented-scooter-text-container'>
                    <p className='rented-scooter-text'>Czas: {Number((props.elapsedTime / 60).toFixed(2))} min</p>
                    <p className='rented-scooter-text'>Koszt: {props.price} PLN</p>
                </div>
            </div>
            <div className='button-container'>
                <button className='rented-scooter-button'>Zakończ przejazd</button>
                <button className='rented-scooter-button'>Zgłoś</button>
            </div>
        </div>
    );
}