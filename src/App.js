import React, {useState} from 'react';
import Formulario from './components/formulario';
import moment from 'moment';

function App() {
  const [precioHora, setPrecioHora] = useState(0);
  const [horaTrabajadas, setHoraTrabajadas] = useState({
    L1:"00:00",
    L2:"00:00",
    M1:"00:00",
    M2:"00:00",
    I1:"00:00",
    I2:"00:00",
    J1:"00:00",
    J2:"00:00",
    V1:"00:00",
    V2:"00:00",
    L3:"00:00",
    L4:"00:00",
    M3:"00:00",
    M4:"00:00",
    I3:"00:00",
    I4:"00:00",
    J3:"00:00",
    J4:"00:00",
    V3:"00:00",
    V4:"00:00",
  });
  const handleInputChange = (event) => {
      setHoraTrabajadas({ ...horaTrabajadas, [event.target.name]: event.target.value});
  };

var m = (
((moment(horaTrabajadas.L2, "HH:mm")) - (moment(horaTrabajadas.L1, "HH:mm"))) +
((moment(horaTrabajadas.L4, "HH:mm")) - (moment(horaTrabajadas.L3, "HH:mm"))) +
((moment(horaTrabajadas.M2, "HH:mm")) - (moment(horaTrabajadas.M1, "HH:mm"))) +
((moment(horaTrabajadas.M4, "HH:mm")) - (moment(horaTrabajadas.M3, "HH:mm"))) +
((moment(horaTrabajadas.I2, "HH:mm")) - (moment(horaTrabajadas.I1, "HH:mm"))) +
((moment(horaTrabajadas.I4, "HH:mm")) - (moment(horaTrabajadas.I3, "HH:mm"))) +
((moment(horaTrabajadas.J2, "HH:mm")) - (moment(horaTrabajadas.J1, "HH:mm"))) +
((moment(horaTrabajadas.J4, "HH:mm")) - (moment(horaTrabajadas.J3, "HH:mm"))) +
((moment(horaTrabajadas.V2, "HH:mm")) - (moment(horaTrabajadas.V1, "HH:mm"))) +
((moment(horaTrabajadas.V4, "HH:mm")) - (moment(horaTrabajadas.V3, "HH:mm")))
)
/1000/60*precioHora/60;

  const Reiniciar = (event) => {
      event.preventDefault()
      setHoraTrabajadas({
    L1:"00:00",
    L2:"00:00",
    M1:"00:00",
    M2:"00:00",
    I1:"00:00",
    I2:"00:00",
    J1:"00:00",
    J2:"00:00",
    V1:"00:00",
    V2:"00:00",
    L3:"00:00",
    L4:"00:00",
    M3:"00:00",
    M4:"00:00",
    I3:"00:00",
    I4:"00:00",
    J3:"00:00",
    J4:"00:00",
    V3:"00:00",
    V4:"00:00",
      })
      setPrecioHora(0)
 }
  return (
    <div className= "container mt-5">
      <h1> <Formulario 
      precioHora={precioHora}
      setPrecioHora={setPrecioHora} 
      handleInputChange={handleInputChange}
      horaTrabajadas={horaTrabajadas}
       /> </h1> 
        <br/>
    <h5>  El valor total a pagar es $ {m} </h5> <br></br>
    <button 
          className="btn btn-primary" 
          type="submit"
          onClick={Reiniciar}>
            Reiniciar{" "}
          </button>
    </div>  
      );
}

export default App;
