const submitForm = document.getElementsByTagName('form')[0];

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

const nameErrorMessage = document.querySelector('#name + .error');
const emailErrorMessage = document.querySelector('#email + .error');
const passwordErrorMessage = document.querySelector('#password + .error');
const confirmPasswordErrorMessage = document.querySelector('#confirm-password + .error');

const submitButton = document.querySelector('#submit-btn');

const removeError = (errorElement) => {
  errorElement.textContent = '';
  errorElement.classList = 'error';
}

const showNameError = () => {
  if (nameInput.validity.valueMissing) {
    nameErrorMessage.textContent = 'Please enter a valid name.';
    nameErrorMessage.classList = 'error active';
  }
}

nameInput.addEventListener('input', () => {
  if (nameInput.validity.valid) {
    removeError(nameErrorMessage);
  } else {
    showNameError();
  }
});

const showEmailError = () => {
  if (emailInput.validity.valueMissing) {
    emailErrorMessage.textContent = 'Please enter a valid email.';
  } else if (emailInput.validity.typeMismatch) {
    emailErrorMessage.textContent = 'Entered value needs to be an email address';
  } else if (emailInput.validity.tooShort) {
    emailErrorMessage.textContent = `Email should be at least ${ emailInput.minLength } characters.`;
  }
  emailErrorMessage.classList = 'error active';
}

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid) {
    removeError(emailErrorMessage);
  } else {
    showEmailError();
  }
});

const showPasswordError = () => {
  if (passwordInput.validity.valueMissing) {
    passwordErrorMessage.textContent = 'Please enter a valid password.';
  } else if (passwordInput.validity.tooShort) {
    passwordErrorMessage.textContent = `Password should be at least ${ passwordInput.minLength } characters.`;
  }
  passwordErrorMessage.classList = 'error active';
}

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valid) {
    removeError(passwordErrorMessage);
  } else {
    showPasswordError();
  }
});

const showConfirmPasswordError = () => {
  if (confirmPasswordInput.validity.customError) {
    confirmPasswordErrorMessage.textContent = 'Passwords do not match.';
  }
  confirmPasswordErrorMessage.classList = 'error active';
}

confirmPasswordInput.addEventListener('input', () => {
  if (!arePasswordsEqual()) {
    confirmPasswordInput.setCustomValidity('password dont match');
    showConfirmPasswordError();
  } else {
    confirmPasswordInput.setCustomValidity('');
    removeError(confirmPasswordErrorMessage);
  }
});

const arePasswordsEqual = () => {
  return passwordInput.value === confirmPasswordInput.value;
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!nameInput.validity.valid) {
    showNameError();
    return;
  }
  if (!emailInput.validity.valid) {
    showEmailError();
    return;
  }
  if (!passwordInput.validity.valid) {
    showPasswordError();
    return;
  }
  if (!arePasswordsEqual()) {
    showConfirmPasswordError();
    return;
  }
  confirmPasswordInput.setCustomValidity('');
  const formSubmit = document.querySelector('.form-submit');
  formSubmit.innerHTML = `
  <p>Name: ${nameInput.value}</p>
  <p>Email: ${emailInput.value}</p>
  `;
});
