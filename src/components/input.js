import React from "react";

const  Input = ({nombre, horaTrabajadas, handleInputChange}) => {
    return(
          <input
            className="form-control "
            value={horaTrabajadas}
            type="text"
            name={nombre}
            onChange={handleInputChange}
          ></input>
    )
}

export default Input