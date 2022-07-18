import React from "react";

const  Input = ({nombre, horaTrabajadas, handleInputChange}) => {
    console.log(horaTrabajadas.length)
    return(
          <input 
            className={`form-control ${horaTrabajadas.length === 5 && horaTrabajadas[0] < 3 && horaTrabajadas[3] < 6 && horaTrabajadas[2] === ':' ? "" :"alert-danger"}`}
            value={horaTrabajadas}
            type="text"
            name={nombre}
            onChange={handleInputChange}
          ></input>
    )
}

export default Input