import React from "react";
import "../estilos/formulario.css";
import Input from "./input"

const Formulario = ({precioHora, setPrecioHora, handleInputChange, horaTrabajadas}) => {
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
            <Input 
            nombre="L1"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.L1}
            /> 
        </div>
        <div className="col-md-2">
          <Input 
            nombre="L2"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.L2}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Lunes a la tarde</p>
        </div>
        <div className="col-md-2">
          <Input 
            nombre="L3"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.L3}
            /> 
        </div>
        <div className="col-md-2">
          <Input 
            nombre="L4"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.L4}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Martes a la mañana </p>
        </div>
        <div className="col-md-2">
          <Input 
            nombre="M1"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.M1}
            /> 
        </div>
        <div className="col-md-2">
          <Input 
            nombre="M2"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.M2}
            /> 
        </div>
      </form>
      <form className="row align-items-start">
        <div className="col-md-2">
          <p> Martes a la tarde </p>
        </div>
        <div className="col-md-2">
          <Input 
            nombre="M3"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.M3}
            /> 
        </div>
        <div className="col-md-2">
          <Input 
            nombre="M4"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.M4}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Miércoles a la mañana</p>
        </div>
        <div className="col-md-2">
          <Input 
            nombre="I1"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.I1}
            /> 
        </div>
        <div className="col-md-2">
          <Input 
            nombre="I2"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.I2}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Miércoles a la tarde </p>
        </div>
        <div className="col-md-2">
          <Input 
            nombre="I3"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.I3}
            /> 
        </div>
        <div className="col-md-2">
          <Input 
            nombre="I4"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.I4}
            /> 
        </div>
      </form>
      <form className="row align-items-start">
        <div className="col-md-2">
          <p> Jueves a la mañana </p>
        </div>
        <div className="col-md-2">
        <Input 
            nombre="J1"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.J1}
            /> 
        </div>
        <div className="col-md-2">
        <Input 
            nombre="J2"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.J2}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Jueves a la tarde</p>
        </div>
        <div className="col-md-2">
        <Input 
            nombre="J3"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.J3}
            /> 
        </div>
        <div className="col-md-2">
        <Input 
            nombre="J4"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.J4}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Viernes a la mañana </p>
        </div>
        <div className="col-md-2">
        <Input 
            nombre="V1"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.V1}
            /> 
        </div>
        <div className="col-md-2">
        <Input 
            nombre="V2"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.V2}
            /> 
        </div>
      </form>
      <form className="row">
        <div className="col-md-2">
          <p> Viernes a la tarde </p>
        </div>
        <div className="col-md-2">
        <Input 
            nombre="V3"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.V3}
            /> 
        </div>
        <div className="col-md-2">
        <Input 
            nombre="V4"
            handleInputChange={handleInputChange}
            horaTrabajadas={horaTrabajadas.V4}
            /> 
        </div>
        
      </form>
      
    </div>
    
  );
        
};

export default Formulario;
