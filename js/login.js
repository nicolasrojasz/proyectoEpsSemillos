let Arrayusuarios = []

const login = () => {
  let usuario = document.getElementById('usuario').value
  let contraseña = document.getElementById('password').value
  console.log(usuario, contraseña)

  let usuarioLocal = JSON.parse(localStorage.getItem('usuarioRegistrados'))

  usuarioLocal.map((item) => {
    if (item.usuario === usuario && item.contrasena === contraseña) {
      alert(`Ingresando, Bienvenido ${item.usuario}`)
      window.location.replace('views/inicio.html')
    } else if (item.usuario !== usuario || item.contrasena !== contraseña) {
      alert('Revisa los datos ingresados')
    }
  })
}

const crearUsuario = () => {
  let nuevoUsuario = document.getElementById('nuevoUsuario').value
  let nuevaContrasena = document.getElementById('nuevaContra').value
  console.log(nuevoUsuario, nuevaContrasena)

  if (nuevoUsuario === '' || nuevaContrasena === '') {
    alert('Ingresa todos los datos')
  } else {
    let ObjUsuario = {
      usuario: nuevoUsuario,
      contrasena: nuevaContrasena,
    }
    Arrayusuarios.push(ObjUsuario)
    localStorage.setItem('usuarioRegistrados', JSON.stringify(Arrayusuarios))
    alert(`Usuario registrado, ahora puedes ingresar ${nuevoUsuario}`)
  }
}




