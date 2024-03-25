function generarExcusa(quien, accion, que, cuando) {
  let quienAleatorio = Math.floor(Math.random() * quien.length);
  let accionAleatoria = Math.floor(Math.random() * accion.length);
  let queAleatorio = Math.floor(Math.random() * que.length);
  let cuandoAleatorio = Math.floor(Math.random() * cuando.length);

  let excusa =
    quien[quienAleatorio] +
    " " +
    accion[accionAleatoria] +
    " " +
    que[queAleatorio] +
    " " +
    cuando[cuandoAleatorio];
  return excusa;
}

window.onload = function() {
  let quien = [
    "Mi perro",
    "Un fantasma",
    "Un encapuchado",
    "Un duende",
    "Mi gato",
    "Un dragón",
    "Un alienígena",
    "Mi vecino",
    "Un mago",
    "Mi hermana"
  ];
  let accion = [
    "se comió",
    "robó",
    "destruyó",
    "quemó",
    "rompió",
    "vendió",
    "escondió",
    "desintegró",
    "hizo desaparecer",
    "tiró al mar"
  ];
  let que = [
    "mi proyecto",
    "mi ordenador",
    "mi teléfono",
    "mi coche",
    "mis deberes",
    "mi teclado",
    "mi libro",
    "mi código",
    "mi portátil",
    "mi disco duro"
  ];
  let cuando = [
    "cuando estaba en la ducha",
    "mientras dormía",
    "mientras hacía la cama",
    "cuando estaba comiendo",
    "mientras iba a clase",
    "cuando estaba de camino",
    "cuando estaba a punto de salir",
    "mientras trabajaba",
    "mientras no miraba",
    "cuando fui a la compra"
  ];

  let excusaAleatoria = generarExcusa(quien, accion, que, cuando);
  document.getElementById("excuse").innerHTML = excusaAleatoria;
};
