import './AddMoney.sass';
import axios from "axios";
import Swal from 'sweetalert2';


export function AddMoney() {
    function handleAddMoneySubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()

        const inputValue = document.getElementsByTagName("input")[0].value;

        const postData = {
            "money": String(inputValue),
            "userName": "customer"
        }

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        if (inputValue === "") {
            Toast.fire({
              title: 'Wpisz odpowiednią wartość'
            })
        } else {
            axios.patch("http://localhost:8080/api/user/balance", postData).then(response => {
                window.location.reload();
            })
        }
    }

    return(
        <div className={'add-money-container'}>
            <form>
                <label>
                    <p className='add-money-text'>Wpisz kwotę:</p>
                    <input type="number"/>
                    <button className='rented-scooter-button' id='add-money-button' onClick={(e) => handleAddMoneySubmit(e)}>Doładuj</button>
                </label>
            </form>
        </div>
    );
}