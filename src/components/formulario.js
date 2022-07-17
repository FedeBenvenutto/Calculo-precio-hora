import React, { useState } from "react";
import "../estilos/formulario.css";
import moment from "moment";


const Formulario = () => {
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
// var horaInicio = new Date(horaTrabajadas.L1).getTime();
// var horaFin    = new Date(horaTrabajadas.L2).getTime();
// var diff = (horaFin - horaInicio)/(1000*60)
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
    <div className="conteiner">
      <h1> Calculo total de horas con precio</h1><br></br>
      <form className="row align-items-start">
        <div className="col-md-2">
          <p> Precio de la hora </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            type="text"
            name="precioHora"
            onChange={(e) => setPrecioHora(e.target.value)}
            value={precioHora}
           ></input>
        </div>
      </form>
      <form className="row align-items-start">
        <div className="col-md-2">
          <p> Lunes a la mañana </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.L1}
            type="text"
            name="L1"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.L2}
            type="text"
            name="L2"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Lunes a la tarde</p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.L3}
            type="text"
            name="L3"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.L4}
            type="text"
            name="L4"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Martes a la mañana </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.M1}
            type="text"
            name="M1"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.M2}
            type="text"
            name="M2"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row align-items-start">
        <div className="col-md-2">
          <p> Martes a la tarde </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.M3}
            type="text"
            name="M3"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.M4}
            type="text"
            name="M4"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Miércoles a la mañana</p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.I1}
            type="text"
            name="I1"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.I2}
            type="text"
            name="I2"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Miércoles a la tarde </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.I3}
            type="text"
            name="I3"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.I4}
            type="text"
            name="I4"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row align-items-start">
        <div className="col-md-2">
          <p> Jueves a la mañana </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.J1}
            type="text"
            name="J1"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.J2}
            type="text"
            name="J2"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Jueves a la tarde</p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.J3}
            type="text"
            name="J3"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.J4}
            type="text"
            name="J4"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Viernes a la mañana </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.V1}
            type="text"
            name="V1"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.V2}
            type="text"
            name="V2"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Viernes a la tarde </p>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.V3}
            type="text"
            name="V3"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="form-control "
            value={horaTrabajadas.V4}
            type="text"
            name="V4"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button 
          className="btn btn-primary" 
          type="submit"
          onClick={Reiniciar}>
           {" "}
            Reiniciar{" "}
          </button>
        </div>
      </form>
      <br/>
      <h5>  El valor total a pagar es $ {m} </h5> <br></br>
    </div>
    
  );
        
};

export default Formulario;
