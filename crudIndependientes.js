let ArrayIndependientes = []

/*------------------------------------------------------INDEPENDIENTES */

function selectTipoDocInde() {
    let cadenaTipoDocInde = ''
    let selecTipoDocInde = document.getElementById(
      'selectIdenIndepedientes',
    ).selectedIndex
  
    if (selecTipoDocInde === 1) {
        cadenaTipoDocInde = 'Cedula de Ciudadania'
      return cadenaTipoDocInde
    } else if (selecTipoDocInde === 2) {
        cadenaTipoDocInde = 'Tarjeta de Identidad'
      return cadenaTipoDocInde
    } else if (selecTipoDocInde === 3) {
        cadenaTipoDocInde = 'Cedula de Extranjeria'
      return cadenaTipoDocInde
    } else if (selecTipoDocInde === 4) {
        cadenaTipoDocInde = 'Otro'
      return cadenaTipoDocInde
    }
  }
  
  function selectTipoSede() {
    let cadenaTipoSede = ''
    let selectTipoSede = document.getElementById('selectSede')
      .selectedIndex
  
    if (selectTipoSede === 1) {
        cadenaTipoSede = 'Norte'
      return cadenaTipoSede
    } else if (selectTipoSede === 2) {
        cadenaTipoSede = 'Sur'
      return cadenaTipoSede
    } else if (selectTipoSede === 3) {
        cadenaTipoSede = 'Este'
      return cadenaTipoSede
    } else if (selectTipoSede === 4) {
        cadenaTipoSede = 'Oeste'
      return cadenaTipoSede
    }else if (selectTipoSede === 5) {
        cadenaTipoSede = 'Centro'
      return cadenaTipoSede
    }
  }
  
  function selectTipoCiudadInde() {
    let cadenaTipoCiudadInde = ''
    let selectTipoCiudadInde = document.getElementById('selectTipoCiudadInde')
      .selectedIndex
  
    if (selectTipoCiudadInde === 1) {
        cadenaTipoCiudadInde = 'Cali'
      return cadenaTipoCiudadInde
    } else if (selectTipoCiudadInde === 2) {
        cadenaTipoCiudadInde = 'Medellin'
      return cadenaTipoCiudadInde
    } else if (selectTipoCiudadInde === 3) {
        cadenaTipoCiudadInde = 'Bogota'
      return cadenaTipoCiudadInde
    } else if (selectTipoCiudadInde === 4) {
        cadenaTipoCiudadInde = 'Popayan'
      return cadenaTipoCiudadInde
    }
  }
  
  const crearIndependiente = () => {
    let cadenaTipoDocInde = selectTipoDocInde()
    let numeroIdenIndependientes = document.getElementById('numeroIdenIndependientes').value
    let nombreIndependiente = document.getElementById('nombreIndependiente').value
    let cadenaCiudad = selectTipoCiudadInde()
    let direccionInde = document.getElementById('direccionInde').value
    let correoIndependiente = document.getElementById('correoIndependiente').value
    let barrioInde = document.getElementById('barrioInde').value
    let cadenaSede = selectTipoSede()
  
    if (
        cadenaTipoDocInde === undefined ||
        numeroIdenIndependientes === '' ||
        nombreIndependiente === '' ||
        cadenaCiudad === undefined ||
        direccionInde === '' ||
        correoIndependiente === '' ||
        barrioInde === '' ||
        cadenaSede === undefined
    ) {
      return alert('Ingresa los datos correctamente')
    } else {
      let ObjIndependiente = {
        tipoDocumento: cadenaTipoDocInde,
        identificacion: numeroIdenIndependientes,
        nombre: nombreIndependiente,
        ciudad: cadenaCiudad,
        direccion: direccionInde,
        correo: correoIndependiente,
        barrio: barrioInde,
        sede: cadenaSede,
      }
      ArrayIndependientes.push(ObjIndependiente)
  
      localStorage.setItem('Independientes', JSON.stringify(ArrayIndependientes))
      alert('Registro Exitoso !')
      mostrarIndependientes()
    }
  }
  
  /* --------------------------------------EDITAR */
  
  function selectTipoDocIndeEditar() {
    let cadenaTipoDocIndeEditar = ''
    let selecTipoDocIndeEditar = document.getElementById(
      'selectIdenIndepedientesEditar',
    ).selectedIndex
  
    if (selecTipoDocIndeEditar === 1) {
        cadenaTipoDocIndeEditar = 'Cedula de Ciudadania'
      return cadenaTipoDocIndeEditar
    } else if (selecTipoDocIndeEditar === 2) {
        cadenaTipoDocIndeEditar = 'Tarjeta de Identidad'
      return cadenaTipoDocIndeEditar
    } else if (selecTipoDocIndeEditar === 3) {
        cadenaTipoDocIndeEditar = 'Cedula de Extranjeria'
      return cadenaTipoDocIndeEditar
    } else if (selecTipoDocIndeEditar === 4) {
        cadenaTipoDocIndeEditar = 'Otro'
      return cadenaTipoDocIndeEditar
    }
  }
  
  function selectTipoSedeEditar() {
    let cadenaTipoSedeEditar = ''
    let selectTipoSedeEditar = document.getElementById('selectSedeEditar')
      .selectedIndex
  
    if (selectTipoSedeEditar === 1) {
        cadenaTipoSedeEditar = 'Norte'
      return cadenaTipoSedeEditar
    } else if (selectTipoSedeEditar === 2) {
        cadenaTipoSedeEditar = 'Sur'
      return cadenaTipoSedeEditar
    } else if (selectTipoSedeEditar === 3) {
        cadenaTipoSedeEditar = 'Este'
      return cadenaTipoSedeEditar
    } else if (selectTipoSedeEditar === 4) {
        cadenaTipoSedeEditar = 'Oeste'
      return cadenaTipoSedeEditar
    }else if (selectTipoSedeEditar === 5) {
        cadenaTipoSedeEditar = 'Centro'
      return cadenaTipoSedeEditar
    }
  }
  
  function selectTipoCiudadIndeEditar() {
    let cadenaTipoCiudadIndeEditar = ''
    let selectTipoCiudadIndeEditar = document.getElementById('selectTipoCiudadIndeEditar')
      .selectedIndex
  
    if (selectTipoCiudadIndeEditar === 1) {
        cadenaTipoCiudadIndeEditar = 'Cali'
      return cadenaTipoCiudadIndeEditar
    } else if (selectTipoCiudadIndeEditar === 2) {
        cadenaTipoCiudadIndeEditar = 'Medellin'
      return cadenaTipoCiudadIndeEditar
    } else if (selectTipoCiudadIndeEditar === 3) {
        cadenaTipoCiudadIndeEditar = 'Bogota'
      return cadenaTipoCiudadIndeEditar
    } else if (selectTipoCiudadIndeEditar === 4) {
        cadenaTipoCiudadIndeEditar = 'Popayan'
      return cadenaTipoCiudadIndeEditar
    }
  }
  
  const actualizarDatos = () => {
       let cadenaCiudadEditar = selectTipoCiudadIndeEditar()
      let cadenaSedeEditar = selectTipoSedeEditar()
      let cadenaTipoDocIndeEditar = selectTipoDocIndeEditar() 

    let numeroIdenIndependienteEditar = document.getElementById('numeroIdenIndependientesEditar').value
    let nombreIndependienteEditar = document.getElementById('nombreIndependienteEditar').value
    let direccionIndeEditar = document.getElementById('direccionIndeEditar').value
    let correoEditar = document.getElementById('correoIndependienteEditar').value
    let barrioEditar = document.getElementById('barrioIndeEditar').value
    console.log(numeroIdenIndependienteEditar)
    console.log(cadenaTipoDocIndeEditar,numeroIdenIndependienteEditar,nombreIndependienteEditar,nombreIndependienteEditar,cadenaCiudadEditar,cadenaSedeEditar,correoEditar,barrioEditar)
    if (
        cadenaTipoDocIndeEditar === undefined ||
        numeroIdenIndependienteEditar === '' ||
        nombreIndependienteEditar === '' ||
        direccionIndeEditar === '' ||
      correoEditar === '' ||
      barrioEditar === '' ||
      cadenaCiudadEditar === undefined ||
      cadenaSedeEditar === undefined
    ) {
      return alert('Ingresa los datos correctamente')
    } else {
      let ArrayIndependientes2 = JSON.parse(localStorage.getItem('Independientes'))
  
      ArrayIndependientes2.map((item) => {
        if (item.identificacion === numeroIdenIndependienteEditar) {
          item.tipoDocumento = numeroIdenIndependienteEditar
          item.identificacion = numeroIdenIndependienteEditar
          item.nombreEmpresa = nombreIndependienteEditar
          item.ciudad = cadenaCiudadEditar
          item.direccion = direccionIndeEditar
          item.correo= correoEditar
          item.barrio= barrioEditar
          item.sede=cadenaSedeEditar
  
          localStorage.setItem(
            'Independientes',
            JSON.stringify(ArrayIndependientes2),
          )
        }
      })
  

      alert('Datos Actualizados!')
      mostrarIndependientes()
    } 
  }
  
  /* -------------------------------------------------- */
  
  const eliminarIdependiente = () => {
    let numeroIdenIndependiente3 = document.getElementById('numeroIdenIndependientesEliminar').value

      console.log(numeroIdenIndependiente3)
    if (numeroIdenIndependiente3 === '') {
      return alert('Ingresa los datos correctamente')
    } else {
      let arrayIndependientes3 = JSON.parse(
        localStorage.getItem('Independientes'),
      )
  
      for (let i = 0; i < arrayIndependientes3.length; i++) {
        if (arrayIndependientes3[i].identificacion === numeroIdenIndependiente3) {
          let posicion = arrayIndependientes3.indexOf(arrayIndependientes3[i])
          arrayIndependientes3.splice(posicion, 1)
        }
      }
  
      localStorage.setItem('Independientes', JSON.stringify(arrayIndependientes3))
       mostrarIndependientes()
      alert('Independiente Eliminado!')
    }
  }
  
   const mostrarIndependientes = () => {
    let tbody = document.getElementById('tbodyIndependientes')
    tbody.innerHTML = ''
    let obtenerIndependientes = JSON.parse(localStorage.getItem('Independientes'))
  
    obtenerIndependientes.map((item) => {
      tbody.innerHTML += `<tr>
                          <td>${item.tipoDocumento}</td>
                          <td>${item.identificacion}</td>
                          <td>${item.nombre}</td>
                          <td>${item.ciudad}</td>
                          <td>${item.direccion}</td>
                          <td>${item.correo}</td>
                          <td>${item.barrio}</td>
                          <td>${item.sede}</td>
                      </tr>`
    })
  }
  /* -------------------------------------------------------INDPENDIENTES */
  