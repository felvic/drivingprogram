// Pide por teclado la edad y la posecion de una licencia
var drive = prompt("¿Conduces?")
var usuarioq = prompt("¿Tienes licencia de conducir?")
var usuario = prompt("¿Que edad tienes?");


// Si es mayor de edad y no posee una licencia pero conduce regularmente
if (usuario >= 18 && usuarioq === "No"&& drive === "Si") {
  // Imprime mensaje en pantalla
  document.write("Ya puedes conducir pero no es legal hacerlo sin una licencia, toma el examen de conducir lo mas pronto posible.");
}

// Si es menor de edad
else if (usuario < 18 && usuarioq === "No" && drive === "No") {
  // Imprime mensaje en pantalla
  document.write("Lo sentimos, debes esperar a tener 18 años para tomar un examen.");
}

// Si es menor de edad,  pero conduce
else if (usuario < 18 && drive === "Si" && usuarioq === "No" ) {
  // Imprime mensaje en pantalla
  document.write("ESO NO ES LEGAL");
}

// Si tiene licencia y es mayor de edad
else if (usuarioq === "Si" && usuario > 18) {
  // Imprime mensaje en pantalla
  alert("Felicidades, conduce siempre con cuidado");
}
