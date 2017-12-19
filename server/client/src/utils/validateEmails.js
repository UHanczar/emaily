const regEpx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailValidator = (emails) => {
  const invalidEmails = emails
  .split(',')
  .map(email => email.trim())
  .filter(email => !regEpx.test(email));

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return null;
};

export default emailValidator;
