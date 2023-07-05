const emailsForm = document.getElementById('emails-form');
const emailsInput = document.getElementById('emails');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

emailsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const emails = emailsInput.value;
  const subject = subjectInput.vallue;
  const message = messageInput.value;

  const emailArr = emails.split(',');
  const emailList = emailArr.map((email) => email.trim());

  console.log(emailList);

  const response = await fetch('./spammer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailList, subject, message }),
  });
  const data = await response.json();
  console.log(data);
});
