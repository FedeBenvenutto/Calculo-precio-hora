import React from "react";

const Input = ({ nombre, horaTrabajadas, handleHoraChange, Errores }) => {
  return (
    <input
      className={`form-control ${Errores ? "alert-danger" : ""}`}
      value={horaTrabajadas}
      type="text"
      name={nombre}
      onChange={handleHoraChange}
    ></input>
  )
}

export default Input