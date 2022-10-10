let ArrayCitasPacientes = []
/* ------------------------ AFILIADOS */
function selectTipoDoc() {
    let cadenaTipoDoc = ''
    let selecTipoDoc = document.getElementById('selectIdentificacion')
      .selectedIndex
  
    if (selecTipoDoc === 1) {
      cadenaTipoDoc = 'Cedula de Ciudadania'
      return cadenaTipoDoc
    } else if (selecTipoDoc === 2) {
      cadenaTipoDoc = 'Tarjeta de Identidad'
      return cadenaTipoDoc
    } else if (selecTipoDoc === 3) {
      cadenaTipoDoc = 'Cedula de Extranjeria'
      return cadenaTipoDoc
    } else if (selecTipoDoc === 4) {
      cadenaTipoDoc = 'Registro Civil'
      return cadenaTipoDoc
    } else if (selecTipoDoc === 5) {
      cadenaTipoDoc = 'Otro'
      return cadenaTipoDoc
    }
  }
  
  function selectTipoEspecialidadF() {
    let cadenaTipoEpecialidad = ''
    let selectTipoEspecialidad = document.getElementById('selectTipoEspeciliad')
      .selectedIndex
  
    if (selectTipoEspecialidad === 1) {
      cadenaTipoEpecialidad = 'Medico General'
      return cadenaTipoEpecialidad
    } else if (selectTipoEspecialidad === 2) {
      cadenaTipoEpecialidad = 'Ofmatologia'
      return cadenaTipoEpecialidad
    } else if (selectTipoEspecialidad === 3) {
      cadenaTipoEpecialidad = 'Pediatria'
      return cadenaTipoEpecialidad
    } else if (selectTipoEspecialidad === 4) {
      cadenaTipoEpecialidad = 'Ginecologia'
      return cadenaTipoEpecialidad
    } else if (selectTipoEspecialidad === 5) {
      cadenaTipoEpecialidad = 'Odontologia'
      return cadenaTipoEpecialidad
    }
  }
  
  const crearCita = () => {
    let cadenaTipoDoc = selectTipoDoc()
    let numeroIdentifiacion = document.getElementById('numeroIdentifiacion').value
    let nombreAfiliado = document.getElementById('nombreAfiliado').value
    let fechaCita = document.getElementById('fechaCita').value
    let cadenaEspecialidad = selectTipoEspecialidadF()
  
    if (
      cadenaTipoDoc === undefined ||
      numeroIdentifiacion === '' ||
      nombreAfiliado === '' ||
      fechaCita === '' ||
      cadenaEspecialidad === undefined
    ) {
      return alert('Ingresa los datos correctamente')
    } else {
      let ObjPaciente = {
        tipoDocumento: cadenaTipoDoc,
        identificacion: numeroIdentifiacion,
        nombrePaciente: nombreAfiliado,
        fechaCita: fechaCita,
        tipoEspeciliad: cadenaEspecialidad,
      }
      ArrayCitasPacientes.push(ObjPaciente)
  
      localStorage.setItem('CitasPacientes', JSON.stringify(ArrayCitasPacientes))
  
      mostrarCitas()
      alert('Cita Registrada!')
    }
  }
  
  /* ------------------------------------------------ EDITAR */
  
  function selectTipoDocEditar() {
    let cadenaTipoDocEditar = ''
    let selecTipoDocEditar = document.getElementById('selectIdentificacionEditar')
      .selectedIndex
  
    if (selecTipoDocEditar === 1) {
      cadenaTipoDocEditar = 'Cedula de Ciudadania'
      return cadenaTipoDocEditar
    } else if (selecTipoDocEditar === 2) {
      cadenaTipoDocEditar = 'Tarjeta de Identidad'
      return cadenaTipoDocEditar
    } else if (selecTipoDocEditar === 3) {
      cadenaTipoDocEditar = 'Cedula de Extranjeria'
      return cadenaTipoDocEditar
    } else if (selecTipoDoc === 4) {
      cadenaTipoDoc = 'Registro Civil'
      return cadenaTipoDoc
    } else if (selecTipoDocEditar === 5) {
      cadenaTipoDocEditar = 'Otro'
      return cadenaTipoDocEditar
    }
  }
  
  function selectTipoEspecialidadFEditar() {
    let cadenaTipoEpecialidadEditar = ''
    let selectTipoEspecialidadEditar = document.getElementById(
      'selectTipoEspeciliadEditar',
    ).selectedIndex
  
    if (selectTipoEspecialidadEditar === 1) {
      cadenaTipoEpecialidadEditar = 'Medico General'
      return cadenaTipoEpecialidadEditar
    } else if (selectTipoEspecialidadEditar === 2) {
      cadenaTipoEpecialidadEditar = 'Ofmatologia'
      return cadenaTipoEpecialidadEditar
    } else if (selectTipoEspecialidadEditar === 3) {
      cadenaTipoEpecialidadEditar = 'Pediatria'
      return cadenaTipoEpecialidadEditar
    } else if (selectTipoEspecialidadEditar === 4) {
      cadenaTipoEpecialidadEditar = 'Ginecologia'
      return cadenaTipoEpecialidadEditar
    } else if (selectTipoEspecialidad === 5) {
      cadenaTipoEpecialidadEditar = 'Odontologia'
      return cadenaTipoEpecialidadEditar
    }
  }
  
  const actualizarDatos = () => {
    let cadenaTipoDocEditar = selectTipoDocEditar()
    let numeroIdentifiacionEditar = document.getElementById(
      'numeroIdentifiacionEditar',
    ).value
    let nombreAfiliadoEditar = document.getElementById('nombreAfiliadoEditar')
      .value
    let fechaCitaEditar = document.getElementById('fechaCitaEditar').value
    let cadenaEspecialidadEditar = selectTipoEspecialidadFEditar()
  
    if (
      cadenaTipoDocEditar === undefined ||
      numeroIdentifiacionEditar === '' ||
      nombreAfiliadoEditar === '' ||
      fechaCitaEditar === '' ||
      cadenaEspecialidadEditar === undefined
    ) {
      return alert('Ingresa los datos correctamente')
    } else {
      let ArrayCitasPacientes2 = JSON.parse(
        localStorage.getItem('CitasPacientes'),
      )
  
      ArrayCitasPacientes2.map((item) => {
        if (item.identificacion === numeroIdentifiacionEditar) {
          item.tipoDocumento = cadenaTipoDocEditar
          item.identificacion = numeroIdentifiacionEditar
          item.nombrePaciente = nombreAfiliadoEditar
          item.fechaCita = fechaCitaEditar
          item.tipoEspeciliad = cadenaEspecialidadEditar
  
          localStorage.setItem(
            'CitasPacientes',
            JSON.stringify(ArrayCitasPacientes2),
          )
        }
      })
  
      mostrarCitas()
      alert('Datos Actualizados!')
    }
  }
  
  /* ----------------------------------------------- */
  
  const eliminarCita = () => {
    let numeroIdentificacion2 = document.getElementById('identificacionEliminar')
      .value
    if (numeroIdentificacion2 === '') {
      return alert('Ingresa los datos correctamente')
    } else {
      let arrayCitasPacientes3 = JSON.parse(
        localStorage.getItem('CitasPacientes'),
      )
  
      for (let i = 0; i < arrayCitasPacientes3.length; i++) {
        if (arrayCitasPacientes3[i].identificacion === numeroIdentificacion2) {
          let posicion = arrayCitasPacientes3.indexOf(arrayCitasPacientes3[i])
          console.log(posicion)
  
          arrayCitasPacientes3.splice(posicion, 1)
        }
      }
  
      localStorage.setItem('CitasPacientes', JSON.stringify(arrayCitasPacientes3))
      mostrarCitas()
      alert('Cita Eliminada!')
    }
  }
  
  const mostrarCitas = () => {
    let tbody = document.getElementById('tbodyAfiliados')
    tbody.innerHTML = ''
    let obtenerCitas = JSON.parse(localStorage.getItem('CitasPacientes'))
  
    obtenerCitas.map((item) => {
      tbody.innerHTML += `<tr>
                          <td>${item.tipoDocumento}</td>
                          <td>${item.identificacion}</td>
                          <td>${item.nombrePaciente}</td>
                          <td>${item.fechaCita}</td>
                          <td>${item.tipoEspeciliad}</td>
                      </tr>`
    })
  }
  /* ---------------------------------------------------- AFILIADOS */