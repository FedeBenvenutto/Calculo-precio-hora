import React, { useEffect, useState } from 'react';
import Formulario from './components/formulario';
import moment from 'moment';
import "../src/estilos/App.css"

function App() {
  const [precioHora, setPrecioHora] = useState(0);
  const [Errores, setErrores] = useState({
    PH: false, L1: false, L2: false, M1: false,
    M2: false, I1: false, I2: false, J1: false, J2: false, V1: false, V2: false, L3: false, L4: false,
    M3: false, M4: false, I3: false, I4: false, J3: false, J4: false, V3: false, V4: false, C1: false,
    C2: false, C3: false, C4: false, C5: false, C6: false, C7: false, C8: false, C9: false, C10: false
  });

  const [horaTrabajadas, setHoraTrabajadas] = useState({
    L1: "00:00", L2: "00:00", M1: "00:00", M2: "00:00", I1: "00:00", I2: "00:00",
    J1: "00:00", J2: "00:00", V1: "00:00", V2: "00:00", L3: "00:00", L4: "00:00",
    M3: "00:00", M4: "00:00", I3: "00:00", I4: "00:00", J3: "00:00", J4: "00:00",
    V3: "00:00", V4: "00:00",
  });

  const handleHoraChange = (event) => {
    setHoraTrabajadas({ ...horaTrabajadas, [event.target.name]: event.target.value });
    let valor = event.target.value;
    valor.length === 5 && valor[0] < 3 && valor[3] < 6 && valor[2] === ':' && (valor[0] + valor[1]) < 24 ?
      setErrores({ ...Errores,  [event.target.name]: false }) :
      setErrores({ ...Errores,  [event.target.name]: true });
  };
  const Lunesmanana = ()=> {
    let valor=horaTrabajadas.L1;
    let valor2=horaTrabajadas.L2;
    setHoraTrabajadas({ ...horaTrabajadas, M1:valor, I1:valor, J1: valor, V1: valor, M2:valor2, I2:valor2, J2: valor2, V2: valor2})
  };
  const Lunestarde = ()=> {
    let valor=horaTrabajadas.L3;
    let valor2=horaTrabajadas.L4;
    setHoraTrabajadas({ ...horaTrabajadas, M3:valor, I3:valor, J3: valor, V3: valor, M4:valor2, I4:valor2, J4: valor2, V4: valor2})
  };

  const handlePrecioChange = (event) => {
    setPrecioHora(event.target.value)
    if (event.target.value >= 0) {
      setErrores({ ...Errores,  PH: false })
    } else {
      setErrores({ ...Errores,  PH: true })
    }
  };
  var comprobarErroresInput =  Errores.L1 || Errores.L2 || Errores.M1 ||
    Errores.M2 || Errores.I1 || Errores.I2 || Errores.J1 || Errores.J2 || Errores.V1 || Errores.V2 || Errores.L3 || Errores.L4 ||
    Errores.M3 || Errores.M4 || Errores.I3 || Errores.I4 || Errores.J3 || Errores.J4 || Errores.V3 || Errores.V4

  var comprobarErrores = Errores.PH || Errores.L1 || Errores.L2 || Errores.M1 ||
    Errores.M2 || Errores.I1 || Errores.I2 || Errores.J1 || Errores.J2 || Errores.V1 || Errores.V2 || Errores.L3 || Errores.L4 ||
    Errores.M3 || Errores.M4 || Errores.I3 || Errores.I4 || Errores.J3 || Errores.J4 || Errores.V3 || Errores.V4 || Errores.C1 ||
    Errores.C2 || Errores.C3 || Errores.C4 || Errores.C5 || Errores.C6 || Errores.C7 || Errores.C8 || Errores.C9 || Errores.C10

  useEffect(() => {
    if (!comprobarErroresInput) {
      var C1 = false, C2 = false, C3 = false, C4 = false, C5 = false, C6 = false, C7 = false, C8 = false, C9 = false, C10 = false;
      if ((moment(horaTrabajadas.L2, "HH:mm")) < (moment(horaTrabajadas.L1, "HH:mm"))) {
        C1 = true;
      }
      if ((moment(horaTrabajadas.L4, "HH:mm")) < (moment(horaTrabajadas.L3, "HH:mm"))) {
        C2 = true;
      }
      if ((moment(horaTrabajadas.M2, "HH:mm")) < (moment(horaTrabajadas.M1, "HH:mm"))) {
        C3 = true;
      };
      if ((moment(horaTrabajadas.M4, "HH:mm")) < (moment(horaTrabajadas.M3, "HH:mm"))) {
        C4 = true;
      };
      if ((moment(horaTrabajadas.I2, "HH:mm")) < (moment(horaTrabajadas.I1, "HH:mm"))) {
        C5 = true;
      };
      if ((moment(horaTrabajadas.I4, "HH:mm")) < (moment(horaTrabajadas.I3, "HH:mm"))) {
        C6 = true
      };
      if ((moment(horaTrabajadas.J2, "HH:mm")) < (moment(horaTrabajadas.J1, "HH:mm"))) {
        C7 = true
      };
      if ((moment(horaTrabajadas.J4, "HH:mm")) < (moment(horaTrabajadas.J3, "HH:mm"))) {
        C8 = true
      };
      if ((moment(horaTrabajadas.V2, "HH:mm")) < (moment(horaTrabajadas.V1, "HH:mm"))) {
        C9 = true
      };
      if ((moment(horaTrabajadas.V4, "HH:mm")) < (moment(horaTrabajadas.V3, "HH:mm"))) {
        C10 = true
      }
    }
    setErrores({ ...Errores, C1: C1, C2: C2, C3: C3, C4: C4, C5: C5, C6: C6, C7: C7, C8: C8, C9: C9, C10: C10 })
  }
    // eslint-disable-next-line
    , [horaTrabajadas]);

  var CalculoTotal = (
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
    / 1000 / 60 * precioHora / 60;

  const Reiniciar = (event) => {
    event.preventDefault()
    setHoraTrabajadas({
      L1: "00:00", L2: "00:00", M1: "00:00", M2: "00:00",
      I1: "00:00", I2: "00:00", J1: "00:00", J2: "00:00", V1: "00:00", V2: "00:00",
      L3: "00:00", L4: "00:00", M3: "00:00", M4: "00:00", I3: "00:00", I4: "00:00",
      J3: "00:00", J4: "00:00", V3: "00:00", V4: "00:00",

    })
    setPrecioHora(0);
    setErrores({PH: false, L1: false, L2: false, M1: false,
      M2: false, I1: false, I2: false, J1: false, J2: false, V1: false, V2: false, L3: false, L4: false,
      M3: false, M4: false, I3: false, I4: false, J3: false, J4: false, V3: false, V4: false, C1: false,
      C2: false, C3: false, C4: false, C5: false, C6: false, C7: false, C8: false, C9: false, C10: false});

  

  }
  return (
    <div className="container mt-4">
      <h1 className='text-center text-md-start'> Calculo total de horas con precio</h1><br></br>
      <h1> <Formulario
        precioHora={precioHora}
        handlePrecioChange={handlePrecioChange}
        handleHoraChange={handleHoraChange}
        horaTrabajadas={horaTrabajadas}
        Errores={Errores}
      /> </h1>
      <br />
      <div>
          {comprobarErrores ? <h5 className="text-danger fs-6 font-monospace ms-3"> Por favor corrija los errores </h5> : ""}
      </div>
      <h5>  El valor total a pagar es $ {comprobarErrores ? "" : CalculoTotal} </h5>   
      <br></br>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        onClick={Lunesmanana}>
        Copiar valor lunes a la mañana al resto
      </button>
      <br></br>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        onClick={Lunestarde}> 
        Copiar valor lunes a la tarde al resto
      </button>
      <br></br>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        onClick={Reiniciar}>
        Reiniciar
      </button>

    </div>
  );
}

export default App;
