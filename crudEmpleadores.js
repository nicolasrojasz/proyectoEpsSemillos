let ArrayEmpleadores = []

/*------------------------------------------------------EMPLEADORES */

function selectTipoDocEmpleadorF() {
    let cadenaTipoDocEmpleador = ''
    let selecTipoDocEmpleador = document.getElementById(
      'selectIdentificacionEmpleador',
    ).selectedIndex
  
    if (selecTipoDocEmpleador === 1) {
      cadenaTipoDocEmpleador = 'Cedula de Ciudadania'
      return cadenaTipoDocEmpleador
    } else if (selecTipoDocEmpleador === 2) {
      cadenaTipoDocEmpleador = 'Tarjeta de Identidad'
      return cadenaTipoDocEmpleador
    } else if (selecTipoDocEmpleador === 3) {
      cadenaTipoDocEmpleador = 'Cedula de Extranjeria'
      return cadenaTipoDocEmpleador
    } else if (selecTipoDocEmpleador === 4) {
      cadenaTipoDocEmpleador = 'Otro'
      return cadenaTipoDocEmpleador
    }
  }
  
  function selectTipoRegimenF() {
    let cadenaTipoRegimen = ''
    let selectTipoRegimen = document.getElementById('selectTipoRegimen')
      .selectedIndex
  
    if (selectTipoRegimen === 1) {
      cadenaTipoEpecialidad = 'Responsable de IVA'
      return cadenaTipoRegimen
    } else if (selectTipoRegimen === 2) {
      cadenaTipoRegimen = 'Persona natural responsable de IVA'
      return cadenaTipoRegimen
    } else if (selectTipoRegimen === 3) {
      cadenaTipoRegimen = 'Regimen Especial'
      return cadenaTipoRegimen
    } else if (selectTipoRegimen === 4) {
      cadenaTipoRegimen = 'Persona natural no responsable de IVA'
      return cadenaTipoRegimen
    }
  }
  
  function selectTipoCiudadF() {
    let cadenaTipoCiudad = ''
    let selectTipoCiudad = document.getElementById('selectTipoCiudad')
      .selectedIndex
  
    if (selectTipoCiudad === 1) {
      cadenaTipoCiudad = 'Cali'
      return cadenaTipoCiudad
    } else if (selectTipoCiudad === 2) {
      cadenaTipoCiudad = 'Medellin'
      return cadenaTipoCiudad
    } else if (selectTipoCiudad === 3) {
      cadenaTipoCiudad = 'Bogota'
      return cadenaTipoCiudad
    } else if (selectTipoCiudad === 4) {
      cadenaTipoCiudad = 'Popayan'
      return cadenaTipoCiudad
    }
  }
  
  const crearEmpleador = () => {
    let cadenaTipoDocEmpleador = selectTipoDocEmpleadorF()
    let numeroIdentifiacionEmpleador = document.getElementById(
      'numeroIdentifiacionEmpleador',
    ).value
    let nombreEmpresa = document.getElementById('nombreEmpresa').value
    let ciudad = selectTipoCiudadF()
    let direccion = document.getElementById('numeroDireccion').value
    let correo = document.getElementById('correoEmpleador').value
    let codigoPostal = document.getElementById('codigoPostal').value
    let cadenaRegimen = selectTipoRegimenF()
  
    if (
      cadenaTipoDocEmpleador === undefined ||
      numeroIdentifiacionEmpleador === '' ||
      nombreEmpresa === '' ||
      ciudad === undefined ||
      direccion === '' ||
      correo === '' ||
      codigoPostal === '' ||
      cadenaRegimen === undefined
    ) {
      return alert('Ingresa los datos correctamente')
    } else {
      let ObjEmpleador = {
        tipoDocumento: cadenaTipoDocEmpleador,
        identificacion: numeroIdentifiacionEmpleador,
        nombreEmpresa: nombreEmpresa,
        ciudad: ciudad,
        direccion: direccion,
        correo: correo,
        codigoPostal: codigoPostal,
        Regimen: cadenaRegimen,
      }
      console.log(ObjEmpleador)
      ArrayEmpleadores.push(ObjEmpleador)
  
      localStorage.setItem('Empleadores', JSON.stringify(ArrayEmpleadores))
      alert('Cita RegistradaEmpleaADO !')
      mostrarCitasEmpleadores()
    }
  }
  
  /* --------------------------------------EDITAR */
  
  function selectIdenEmpleadorEditarF() {
    let cadenaTipoDocEmpleadorEditar = ''
    let selecTipoDocEditarEmpleador = document.getElementById(
      'selectIdenEmpleadorEditar',
    ).selectedIndex
  
    if (selecTipoDocEditarEmpleador === 1) {
      cadenaTipoDocEmpleadorEditar = 'Cedula de Ciudadania'
      return cadenaTipoDocEmpleadorEditar
    } else if (selecTipoDocEditarEmpleador === 2) {
      cadenaTipoDocEmpleadorEditar = 'Tarjeta de Identidad'
      return cadenaTipoDocEmpleadorEditar
    } else if (selecTipoDocEditarEmpleador === 3) {
      cadenaTipoDocEmpleadorEditar = 'Cedula de Extranjeria'
      return cadenaTipoDocEmpleadorEditar
    } else if (selecTipoDocEditarEmpleador === 4) {
      cadenaTipoDocEmpleadorEditar = 'Otro'
      return cadenaTipoDocEmpleadorEditar
    }
  }
  
  function selectTipoRegimenEditar() {
    let cadenaTipoRegimen = ''
    let selectTipoRegimen = document.getElementById('selectTipoRegimenEditar')
      .selectedIndex
  
    if (selectTipoRegimen === 1) {
      cadenaTipoEpecialidad = 'Responsable de IVA'
      return cadenaTipoRegimen
    } else if (selectTipoRegimen === 2) {
      cadenaTipoRegimen = 'Persona natural responsable de IVA'
      return cadenaTipoRegimen
    } else if (selectTipoRegimen === 3) {
      cadenaTipoRegimen = 'Regimen Especial'
      return cadenaTipoRegimen
    } else if (selectTipoRegimen === 4) {
      cadenaTipoRegimen = 'Persona natural no responsable de IVA'
      return cadenaTipoRegimen
    }
  }
  
  function selectTipoCiudadEditar() {
    let cadenaTipoCiudad = ''
    let selectTipoCiudad = document.getElementById('selectCiudadEditar')
      .selectedIndex
  
    if (selectTipoCiudad === 1) {
      cadenaTipoCiudad = 'Cali'
      return cadenaTipoCiudad
    } else if (selectTipoCiudad === 2) {
      cadenaTipoCiudad = 'Medellin'
      return cadenaTipoCiudad
    } else if (selectTipoCiudad === 3) {
      cadenaTipoCiudad = 'Bogota'
      return cadenaTipoCiudad
    } else if (selectTipoCiudad === 4) {
      cadenaTipoCiudad = 'Popayan'
      return cadenaTipoCiudad
    }
  }
  
  const actualizarDatosEmpleadores = () => {
    let cadenaIdenEmpleadorEditar = selectIdenEmpleadorEditarF()
    let numeroIdenEmpleadorEditar = document.getElementById(
      'numeroIdenEmpleadorEditar',
    ).value
    let nombreEmpresaEditar = document.getElementById('nombreEmpresaEditar').value
    let cadenaCiudadEditar = selectTipoCiudadEditar()
    let cadenaTipoRegimenEditar = selectTipoRegimenEditar()
    let direccionEditar = document.getElementById('DireccionEditar').value
    let correoEditar = document.getElementById('correoEditar').value
    let codigoPostalEditar = document.getElementById('codigoPostalEmpleador').value
    if (
      cadenaIdenEmpleadorEditar === undefined ||
      numeroIdenEmpleadorEditar === '' ||
      nombreEmpresaEditar === '' ||
      direccionEditar === '' ||
      correoEditar === '' ||
      codigoPostalEditar === '' ||
      cadenaCiudadEditar === undefined ||
      cadenaTipoRegimenEditar === undefined
    ) {
      return alert('Ingresa los datos correctamente')
    } else {
      let ArrayEmpleadores2 = JSON.parse(localStorage.getItem('Empleadores'))
  
  
      ArrayEmpleadores2.map((item) => {
        if (item.identificacion === numeroIdenEmpleadorEditar) {
          item.tipoDocumento = cadenaIdenEmpleadorEditar
          item.identificacion = numeroIdenEmpleadorEditar
          item.nombreEmpresa = nombreEmpresaEditar
          item.ciudad = cadenaCiudadEditar
          item.direccion = direccionEditar
          item.correo= correoEditar
          item.codigoPostal= codigoPostalEditar
          item.Regimen=cadenaTipoRegimenEditar
  
          localStorage.setItem(
            'Empleadores',
            JSON.stringify(ArrayEmpleadores2),
          )
        }
      })
  
      /* mostrarCitas() */
      alert('Datos Actualizados!')
      mostrarCitasEmpleadores()
    }
  }
  
  /* -------------------------------------------------- */
  
  const eliminarEmpleador = () => {
    let numeroIdenEmpleador3 = document.getElementById('idenEliminarEmpleador')
      .value
    if (numeroIdenEmpleador3 === '') {
      return alert('Ingresa los datos correctamente')
    } else {
      let arrayEmpleadores3 = JSON.parse(
        localStorage.getItem('Empleadores'),
      )
  
      for (let i = 0; i < arrayEmpleadores3.length; i++) {
        if (arrayEmpleadores3[i].identificacion === numeroIdenEmpleador3) {
          let posicion = arrayEmpleadores3.indexOf(arrayEmpleadores3[i])
          arrayEmpleadores3.splice(posicion, 1)
        }
      }
  
      localStorage.setItem('Empleadores', JSON.stringify(arrayEmpleadores3))
      mostrarCitasEmpleadores()
      alert('Cita Eliminada!')
    }
  }
  
   const mostrarCitasEmpleadores = () => {
    let tbody = document.getElementById('tbodyEmpleadores')
    tbody.innerHTML = ''
    let obtenerEmpleadores = JSON.parse(localStorage.getItem('Empleadores'))
  
    obtenerEmpleadores.map((item) => {
      tbody.innerHTML += `<tr>
                          <td>${item.tipoDocumento}</td>
                          <td>${item.identificacion}</td>
                          <td>${item.nombreEmpresa}</td>
                          <td>${item.correo}</td>
                          <td>${item.Regimen}</td>
                          <td>${item.direccion}</td>
                      </tr>`
    })
  }
  /* -------------------------------------------------------EMPLEADORES */
  