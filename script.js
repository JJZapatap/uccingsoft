function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerText = "Por favor, ingresa valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 24.9) {
        clasificacion = "Normal";
    } else if (imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    resultado.innerText = `Tu IMC es ${imc.toFixed(2)} - ${clasificacion}`;
}
// JavaScript Document