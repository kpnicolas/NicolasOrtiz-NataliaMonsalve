const registro = [
  {
    nombre: "Natalia",
    apellido: "Monsalve",
    user: "nvmonsalve",
    contraseña: "nvmonsalve1",
    tipo: "Administrador",
  },
  {
    nombre: "Nicolás",
    apellido: "Ortiz",
    user: "ndortiz",
    contraseña: "ndortiz1",
    tipo: "Usuario",
  },
  {
    nombre: "Bryan",
    apellido: "Fernandez",
    user: "bfernandez",
    contraseña: "bfernandez1",
    tipo: "Administrador",
  },
];
localStorage.setItem("cuentas", JSON.stringify(registro));
const usuarios = JSON.parse(localStorage.getItem("cuentas"));

const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].user == user.value &&
      usuarios[i].contraseña == password.value
    ) {
      alert(
        "Bienvenido: " +
          usuarios[i].tipo +
          " " +
          usuarios[i].nombre +
          " " +
          usuarios[i].apellido
      );
      break;
    }
  }
  if (i == usuarios.length) {
    alert("Datos erroneos");
  }
});

function hide() {
  var div = document.getElementById("log");
  div.style.display = "none";
}

function show() {
  div = document.getElementById("log");
  div.style.display = "";
}
