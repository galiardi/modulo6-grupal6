function atLeastOneValid(emails) {
  const emailList = emails.split(',');
  if (!emailList.length) return false;
  const validEmails = emailList.filter((email) => isValidEmail(email));
  if (validEmails.length === 0) return false;
  return true;
}

function isValidEmail(email) {
  if (!email.includes('@')) return false;
  if (!email.includes('.')) return false;
  if (email.length < 7) return false;
  return true;
}

export { atLeastOneValid };
