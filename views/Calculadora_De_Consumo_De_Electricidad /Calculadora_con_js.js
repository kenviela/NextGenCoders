// La función se llama cuando el usuario hace clic en el botón
function calcularConsumo() {
    // 1. Obtener los valores de los inputs
    const potenciaVatios = parseFloat(document.getElementById('potencia').value);
    const horasDiarias = parseFloat(document.getElementById('horas').value);
    const costoPorKwh = parseFloat(document.getElementById('costo').value);
    const resultadoDiv = document.getElementById('resultado');

    // 2. Validar que los valores sean números positivos
    if (isNaN(potenciaVatios) || isNaN(horasDiarias) || isNaN(costoPorKwh) || 
        potenciaVatios < 0 || horasDiarias < 0 || costoPorKwh < 0) {
        resultadoDiv.innerHTML = '<p class="error">Por favor, introduce valores numéricos positivos válidos.</p>';
        return;
    }

    // 3. Realizar los Cálculos
    
    // a. Consumo Diario en Kilovatios-hora (kWh)
    // Se divide por 1000 para convertir de Vatios-hora a Kilovatios-hora
    const consumoDiarioKwh = (potenciaVatios * horasDiarias) / 1000;

    // b. Costo Diario
    const costoDiario = consumoDiarioKwh * costoPorKwh;

    // c. Consumo y Costo Mensual (asumiendo 30 días)
    const consumoMensualKwh = consumoDiarioKwh * 30;
    const costoMensual = costoDiario * 30;


    // 4. Mostrar el Resultado
    resultadoDiv.innerHTML = `
        <h3>Estimación de Consumo y Costo</h3>
        <p>🔌 Consumo Diario: <strong>${consumoDiarioKwh.toFixed(3)} kWh</strong></p>
        <p>💰 Costo Diario: <strong>${costoDiario.toFixed(2)}</strong></p>
        <p>---</p>
        <p>⚡ Consumo Mensual (aprox.): <strong>${consumoMensualKwh.toFixed(2)} kWh</strong></p>
        <p>💸 Costo Mensual (aprox.): <strong>${costoMensual.toFixed(2)}</strong></p>
    `;
}

// Opcional: Ejecutar la función una vez al cargar la página para mostrar un resultado inicial.
window.onload = calcularConsumo;