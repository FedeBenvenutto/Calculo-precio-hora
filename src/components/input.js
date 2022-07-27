import React from "react";

const Input = ({ nombre, horaTrabajadas, handleHoraChange, Errores }) => {
  return (
    <input
      className={`form-control ${Errores ? "alert-danger" : ""}`}
      value={horaTrabajadas === "00:00" ? "" : horaTrabajadas}
      type="text"
      name={nombre}
      onChange={handleHoraChange}
      maxLength= "5"
      placeholder="00:00"
      ></input>
  )
}

export default Input