import React from "react";

const  Input = ({nombre, horaTrabajadas, handleInputChange}) => {
        return(
          <input 
            className={`form-control 
            ${horaTrabajadas.length === 5 && horaTrabajadas[0] < 3 && horaTrabajadas[3] < 6 && horaTrabajadas[2] === ':' && (horaTrabajadas[0]+horaTrabajadas[1]) < 24 ? "" : "alert-danger"} 
             `}
            value={horaTrabajadas}
            type="text"
            name={nombre}
            onChange={handleInputChange}
          ></input>
    )
}

export default Input