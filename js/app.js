const h2 = document.querySelector("h2");
const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnReiniciar = document.getElementById("reiniciar");
const form = document.querySelector("form");
let interval;
let numContador;
function obtenerDatos(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  numContador = input.value;
  h2.innerHTML = numContador;
  form.classList.add("d-none");
  form.reset();
}
function iniciarContador() {
  if (numContador === 0) {
    clearInterval(interval);
    btnIniciar.classList.remove("disabled");
  } else {
    numContador--;
    h2.innerHTML = numContador;
  }
}
function iniciarInterval() {
  btnIniciar.classList.add("disabled");
  interval = setInterval(iniciarContador, 1000);
}
function pausarContador() {
  clearInterval(interval);
  btnIniciar.classList.remove("disabled");
}
function reiniciarContador() {
  form.classList.remove("d-none");
  numContador = 0;
  h2.innerHTML = numContador;
}
form.addEventListener("submit", obtenerDatos);
btnIniciar.addEventListener("click", iniciarInterval);
btnPausar.addEventListener("click", pausarContador);
btnReiniciar.addEventListener("click", reiniciarContador);
