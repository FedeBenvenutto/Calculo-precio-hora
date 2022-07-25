import React from "react";
import "../estilos/formulario.css";
import Input from "./input";

const Formulario = ({ precioHora, handleHoraChange, handlePrecioChange, horaTrabajadas, Errores }) => {

  return (
    <div className="formulario">
        <form className="row align-items-start">
        <div className="col-6 align-self-center">
          <p> Precio de la hora </p>
        </div>
        <div className="col">
          <input
            className={`form-control ${Errores.PH ? "alert-danger" : ""}`}
            type="text"
            name="precioHora"
            onChange={handlePrecioChange}
            value={precioHora}
          ></input>
        </div>
      </form>
      <form className="row align-items-start ">
        <div className="col-6 mt-1 align-self-center">
          <p> Lunes a la mañana </p>
        </div>
        <div className="col mt-1">
          <Input
            nombre="L1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L1}
            Errores={Errores.L1 || Errores.C1}
          />
        </div>
        <div className="col mt-1">
          <Input
            nombre="L2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L2}
            Errores={Errores.L2 || Errores.C1}
          />
        </div>
        <div>
          {Errores.C1 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6>
            : ""}
        </div>
      </form>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Lunes a la tarde</p>
        </div>
        <div className="col">
          <Input
            nombre="L3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L3}
            Errores={Errores.L3 || Errores.C2}
          />
        </div>
        <div className="col">
          <Input
            nombre="L4"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.L4}
            Errores={Errores.L4 || Errores.C2}
          />
        </div>

      </form>
      <div>
        {Errores.C2 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Martes a la mañana </p>
        </div>
        <div className="col">
          <Input
            nombre="M1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M1}
            Errores={Errores.M1 || Errores.C3}
          />
        </div>
        <div className="col">
          <Input
            nombre="M2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M2}
            Errores={Errores.M2 || Errores.C3}
          />
        </div>
      </form>
      <div>
        {Errores.C3 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row align-items-start">
        <div className="col-6 align-self-center">
          <p> Martes a la tarde </p>
        </div>
        <div className="col">
          <Input
            nombre="M3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M3}
            Errores={Errores.M3 || Errores.C4}
          />
        </div>
        <div className="col">
          <Input
            nombre="M4"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.M4}
            Errores={Errores.M4 || Errores.C4}
          />
        </div>
      </form>
      <div>
        {Errores.C4 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Miércoles a la mañana</p>
        </div>
        <div className="col">
          <Input
            nombre="I1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.I1}
            Errores={Errores.I1 || Errores.C5}
          />
        </div>
        <div className="col">
          <Input
            nombre="I2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.I2}
            Errores={Errores.I2 || Errores.C5}
          />
        </div>
      </form>
      <div>
        {Errores.C5 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Miércoles a la tarde </p>
        </div>
        <div className="col">
          <Input
            nombre="I3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.I3}
            Errores={Errores.I3 || Errores.C6}
          />
        </div>
        <div className="col">
          <Input
            nombre="I4"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.I4}
            Errores={Errores.I4 || Errores.C6}
          />
        </div>
      </form>
      <div>
        {Errores.C6 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row align-items-start">
        <div className="col-6 align-self-center">
          <p> Jueves a la mañana </p>
        </div>
        <div className="col">
          <Input
            nombre="J1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.J1}
            Errores={Errores.J1 || Errores.C7}
          />
        </div>
        <div className="col">
          <Input
            nombre="J2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.J2}
            Errores={Errores.J2 || Errores.C7}
          />
        </div>
      </form>
      <div>
        {Errores.C7 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Jueves a la tarde</p>
        </div>
        <div className="col">
          <Input
            nombre="J3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.J3}
            Errores={Errores.J3 || Errores.C8}
          />
        </div>
        <div className="col">
          <Input
            nombre="J4"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.J4}
            Errores={Errores.J4 || Errores.C8}
          />
        </div>
      </form>
      <div>
        {Errores.C8 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Viernes a la mañana </p>
        </div>
        <div className="col">
          <Input
            nombre="V1"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.V1}
            Errores={Errores.V1 || Errores.C9}
          />
        </div>
        <div className="col">
          <Input
            nombre="V2"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.V2}
            Errores={Errores.V2 || Errores.C9}
          />
        </div>
      </form>
      <div>
        {Errores.C9 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>
      <form className="row">
        <div className="col-6 align-self-center">
          <p> Viernes a la tarde </p>
        </div>
        <div className="col">
          <Input
            nombre="V3"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.V3}
            Errores={Errores.V3 || Errores.C10}
          />
        </div>
        <div className="col">
          <Input
            nombre="V4"
            handleHoraChange={handleHoraChange}
            horaTrabajadas={horaTrabajadas.V4}
            Errores={Errores.V4 || Errores.C10}
          />
        </div>

      </form>
      <div>
        {Errores.C10 ? <h6 className="text-danger fs-6 font-monospace ms-2"> Por favor corrija este campo </h6> : ""}
      </div>

    </div>

  );

};

export default Formulario;
