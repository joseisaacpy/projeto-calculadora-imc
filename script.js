function calcularIMC(event) {
  event.preventDefault();
  // input peso
  let peso = document.getElementById("peso").value;
  // input altura
  let altura = document.getElementById("altura").value;
  // formula imc
  let imc = peso / (altura * altura);
  //   lugar da resposta
  let resposta = document.getElementById("resposta");

  //   condicões de peso
  if (imc < 17) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Muito abaixo do peso`;
  } else if (imc >= 17 && imc <= 18.49) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Abaixo do peso`;
  } else if (imc >= 18.5 && imc <= 24.99) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Peso normal`;
  } else if (imc >= 25 && imc <= 29.99) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Acima do peso`;
  } else if (imc >= 30 && imc <= 34.99) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Obesidade Grau I`;
  } else if (imc >= 35 && imc <= 39.99) {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Obesidade Grau II (severa)`;
  } else {
    resposta.innerHTML = `Seu IMC é: ${imc.toFixed(
      2
    )}</br>Situação: Obesidade Grau III (mórbida)`;
  }
}
