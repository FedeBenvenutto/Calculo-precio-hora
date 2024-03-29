import React, { useEffect, useState } from 'react';
import Formulario from './components/formulario';
import moment from 'moment';
import "../src/estilos/App.css"

function App() {

  // USESTATES NECESARIOS
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
  useEffect(() => {if (localStorage.getItem("precioHora")) {
    setErrores (JSON.parse(localStorage.getItem("Errores")))
    setPrecioHora (localStorage.getItem("precioHora") )
    setHoraTrabajadas(JSON.parse(localStorage.getItem ("horaTrabajadas")))
    // eslint-disable-next-line
  }}, []);
  

// MODIFICACIONES DEL PRECIO Y DE LAS HORAS
const handlePrecioChange = (event) => {
    let valor = event.target.value.replace(/[^0-9.]/g, '')
    if (valor === "") {
      setPrecioHora(0);
      setErrores({ ...Errores,  PH: false })
      } else {
    setPrecioHora(valor)
    if (valor >= 0) {
      setErrores({ ...Errores,  PH: false })
    } else {
      setErrores({ ...Errores,  PH: true })
    }
  }};
  
  const handleHoraChange = (event) => {
    if (event.target.value === "") {
      setHoraTrabajadas({ ...horaTrabajadas, [event.target.name]: "00:00"
       });
      setErrores({ ...Errores,  [event.target.name]: false})
       } else { 
    let valor = event.target.value.replace(/[^0-9]/g, '')
    .replace(/([0-9]{2})/, '$1:');
    setHoraTrabajadas({ ...horaTrabajadas, [event.target.name]: valor });
    let patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/
    patronHora.test(valor) ?
      setErrores({ ...Errores,  [event.target.name]: false }) :
      setErrores({ ...Errores,  [event.target.name]: true })}
  };
  
  // MANEJO DE BOTONES 
  const Lunesmanana = ()=> {
    let valor=horaTrabajadas.L1;
    let valor2=horaTrabajadas.L2;
    setHoraTrabajadas({ ...horaTrabajadas, M1:valor, I1:valor, J1: valor, V1: valor, M2:valor2, 
      I2:valor2, J2: valor2, V2: valor2})
  };
  const Lunestarde = ()=> {
    let valor=horaTrabajadas.L3;
    let valor2=horaTrabajadas.L4;
    setHoraTrabajadas({ ...horaTrabajadas, M3:valor, I3:valor, J3: valor, V3: valor, M4:valor2, 
      I4:valor2, J4: valor2, V4: valor2})
  };
  const Guardar = (event) => {
    localStorage.clear();
    localStorage.setItem('precioHora', precioHora);
    localStorage.setItem('Errores', JSON.stringify(Errores));
    localStorage.setItem('horaTrabajadas', JSON.stringify(horaTrabajadas));
  };
  const Reiniciar = (event) => {
    setHoraTrabajadas({
      L1: "00:00", L2: "00:00", M1: "00:00", M2: "00:00",
      I1: "00:00", I2: "00:00", J1: "00:00", J2: "00:00", V1: "00:00", V2: "00:00",
      L3: "00:00", L4: "00:00", M3: "00:00", M4: "00:00", I3: "00:00", I4: "00:00",
      J3: "00:00", J4: "00:00", V3: "00:00", V4: "00:00"
    })
    setPrecioHora(0);
    setErrores({PH: false, L1: false, L2: false, M1: false,
      M2: false, I1: false, I2: false, J1: false, J2: false, V1: false, V2: false, L3: false, L4: false,
      M3: false, M4: false, I3: false, I4: false, J3: false, J4: false, V3: false, V4: false, C1: false,
      C2: false, C3: false, C4: false, C5: false, C6: false, C7: false, C8: false, C9: false, C10: false});
    localStorage.clear()
  };

  // MANEJO DE ERRORES 
  var comprobarErroresInput =  Errores.L1 || Errores.L2 || Errores.M1 ||
    Errores.M2 || Errores.I1 || Errores.I2 || Errores.J1 || Errores.J2 || Errores.V1 || Errores.V2 || Errores.L3 || Errores.L4 ||
    Errores.M3 || Errores.M4 || Errores.I3 || Errores.I4 || Errores.J3 || Errores.J4 || Errores.V3 || Errores.V4

  var comprobarErrores = Errores.PH || Errores.L1 || Errores.L2 || Errores.M1 ||
    Errores.M2 || Errores.I1 || Errores.I2 || Errores.J1 || Errores.J2 || Errores.V1 || Errores.V2 || Errores.L3 || Errores.L4 ||
    Errores.M3 || Errores.M4 || Errores.I3 || Errores.I4 || Errores.J3 || Errores.J4 || Errores.V3 || Errores.V4 || Errores.C1 ||
    Errores.C2 || Errores.C3 || Errores.C4 || Errores.C5 || Errores.C6 || Errores.C7 || Errores.C8 || Errores.C9 || Errores.C10

    useEffect(() => {
      if (!comprobarErroresInput) {
        var C1 = false, C2 = false, C3 = false, C4 = false, C5 = false, 
        C6 = false, C7 = false, C8 = false, C9 = false, C10 = false;
        if ((moment(horaTrabajadas.L2, "HH:mm")) < (moment(horaTrabajadas.L1, "HH:mm")) 
        && horaTrabajadas.L2 !== "00:00") {
          C1 = true;
        } if ((moment(horaTrabajadas.L4, "HH:mm")) < (moment(horaTrabajadas.L3, "HH:mm"))
        && horaTrabajadas.L4 !== "00:00") {
          C2 = true;
        } if ((moment(horaTrabajadas.M2, "HH:mm")) < (moment(horaTrabajadas.M1, "HH:mm"))
        && horaTrabajadas.M2 !== "00:00") {
          C3 = true;
        } if ((moment(horaTrabajadas.M4, "HH:mm")) < (moment(horaTrabajadas.M3, "HH:mm"))
        && horaTrabajadas.M4 !== "00:00") {
          C4 = true;
        } if ((moment(horaTrabajadas.I2, "HH:mm")) < (moment(horaTrabajadas.I1, "HH:mm"))
        && horaTrabajadas.I2 !== "00:00") {
          C5 = true;
        } if ((moment(horaTrabajadas.I4, "HH:mm")) < (moment(horaTrabajadas.I3, "HH:mm"))
        && horaTrabajadas.I4 !== "00:00") {
          C6 = true
        } if ((moment(horaTrabajadas.J2, "HH:mm")) < (moment(horaTrabajadas.J1, "HH:mm"))
        && horaTrabajadas.J2 !== "00:00") {
          C7 = true
        } if ((moment(horaTrabajadas.J4, "HH:mm")) < (moment(horaTrabajadas.J3, "HH:mm"))
        && horaTrabajadas.J4 !== "00:00") {
          C8 = true
        } if ((moment(horaTrabajadas.V2, "HH:mm")) < (moment(horaTrabajadas.V1, "HH:mm"))
        && horaTrabajadas.I2 !== "00:00") {
          C9 = true
        } if ((moment(horaTrabajadas.V4, "HH:mm")) < (moment(horaTrabajadas.V3, "HH:mm"))
        && horaTrabajadas.I4 !== "00:00") {
          C10 = true
        } if ((moment(horaTrabajadas.L3, "HH:mm")) < (moment(horaTrabajadas.L2, "HH:mm")) 
        && horaTrabajadas.L3 !== "00:00") {
          C1 = true; C2 = true;
        } if ((moment(horaTrabajadas.M3, "HH:mm")) < (moment(horaTrabajadas.M2, "HH:mm"))
        && horaTrabajadas.M3 !== "00:00") {
          C3 = true; C4= true;
        } if ((moment(horaTrabajadas.I3, "HH:mm")) < (moment(horaTrabajadas.I2, "HH:mm"))
        && horaTrabajadas.I3 !== "00:00") {
          C5 = true;  C6= true;
        } if ((moment(horaTrabajadas.J3, "HH:mm")) < (moment(horaTrabajadas.J2, "HH:mm"))
        && horaTrabajadas.J3 !== "00:00") {
          C7 = true;  C8= true;
        } if ((moment(horaTrabajadas.V3, "HH:mm")) < (moment(horaTrabajadas.V2, "HH:mm"))
        && horaTrabajadas.V3 !== "00:00") {
          C9 = true;  C10= true;
        }}
      setErrores({ ...Errores, C1: C1, C2: C2, C3: C3, C4: C4, C5: C5, C6: C6, C7: C7, C8: C8, C9: C9, C10: C10 })
    }
      // eslint-disable-next-line
      , [horaTrabajadas]);
  

    // CALCULO TOTAL 
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
          {comprobarErrores ? 
          <h5 className="text-danger fs-6 font-monospace ms-3"> Por favor corrija los errores </h5> 
          : CalculoTotal < 0 ?  
          <h5 className="text-danger fs-6 font-monospace ms-3"> El valor de finalización no puede ser 00:00 </h5> 
          : ""}
      </div>
      <h5>  El valor total a pagar es $ {comprobarErrores || CalculoTotal < 0 ? "" : CalculoTotal} </h5>   
      <br></br>
      <button
        className="btn btn-primary mt-2"
        onClick={Lunesmanana}>
        Copiar valor lunes a la mañana al resto
      </button>
      <br></br>
      <button
        className="btn btn-primary mt-2"
        onClick={Lunestarde}> 
        Copiar valor lunes a la tarde al resto
      </button>
      <br></br>
      
      <button
        className="btn btn-secondary mt-2"
        onClick={Guardar}>
        Guardar datos
      </button>
    <button
        className="btn btn-danger mt-2 ms-2"
        onClick={Reiniciar}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;
