async function createMessage(emailMessage) {
  const { dolar, euro, uf, utm } = await fetch(
    'https://mindicador.cl/api'
  ).then((response) => response.json());

  const economicIndicators = [dolar, euro, uf, utm]
    .map((indicator) => {
      return `<p>${indicator.nombre}: ${indicator.valor}</p>`;
    })
    .join('');

  const messageWithIndicators =
    emailMessage + '<p>Los indicadores de hoy son:</p>' + economicIndicators;

  return messageWithIndicators;
}

module.exports = createMessage;
