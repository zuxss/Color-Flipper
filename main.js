const colores = ["green", "red", "rgba(133,122,200)", "#f15025"];
const boton = document.getElementById("btn");
const color = document.querySelector(".color");

boton.addEventListener("click", function () {
  //Obtener valores random 0-3
  const randomNumber = obtenerRandom();
  document.body.style.backgroundColor = colores[randomNumber];
  color.textContent = colores[randomNumber];
});

function obtenerRandom() {
  return Math.floor(Math.random() * colores.length);
}
