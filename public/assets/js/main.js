const emailsForm = document.getElementById('emails-form');
const emailsInput = document.getElementById('emails');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');
const renderDiv = document.getElementById('render-div');

emailsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.innerHTML = 'cargando...';
  const emailList = emailsInput.value.trim();
  const emailSubject = subjectInput.value.trim();
  const emailMessage = messageInput.value.trim();

  try {
    const response = await fetch('./spammer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailList, emailSubject, emailMessage }),
    });
    const { data, error } = await response.json();

    if (error) {
      renderDiv.innerHTML = `<div class="error">Error al enviar el mail: ${error}</div>`;
      submitButton.disabled = false;
      submitButton.innerHTML = 'enviar';
      return;
    }

    renderDiv.innerHTML = `
    <div class="success">
      <p>
        Email enviado exitosamente a: ${
          data.accepted.length ? data.accepted.join(', ') : 'ningun correo'
        }.
      </p>
      <p>
        ${
          data.rejected.length
            ? `Los siguientes correos fueron rechazados: ${data.rejected.join(
                ', '
              )}.`
            : ''
        }
      </p>
      <p>
        ${
          data.fileSaved
            ? 'El archivo fue guardado exitosamente.'
            : 'El archivo no pudo ser guardado.'
        }
      </p>
    </div>`;

    // limpia formulario
    emailsInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
    submitButton.disabled = false;
    submitButton.innerHTML = 'enviar';
  } catch (error) {
    renderDiv.innerHTML = `<div class="error">Error al enviar el mail: ${error}</div>`;
    submitButton.disabled = false;
    submitButton.innerHTML = 'enviar';
  }
});
