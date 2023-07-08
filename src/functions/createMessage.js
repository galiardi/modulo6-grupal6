async function createMessage(messageHeader) {
  const { dolar, euro, uf, utm } = await fetch(
    'https://mindicador.cl/api'
  ).then((response) => response.json());

  const economicIndicators = [dolar, euro, uf, utm]
    .map((indicator) => {
      return `<p>${indicator.nombre}: ${indicator.valor}</p>`;
    })
    .join('');

  const message =
    messageHeader + '<p>Los indicadores de hoy son:</p>' + economicIndicators;

  return message;
}

module.exports = createMessage;
