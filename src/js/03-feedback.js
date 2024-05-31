import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));

const formData = {
  email: storedData?.email || '',
  message: storedData?.message || '',
};

formEl.elements.email.value = formData.email;
formEl.elements.message.value = formData.message;

formEl.addEventListener(
  'input',
  throttle(event => onFormInput(event), 500)
);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.log(formData);

  resetForm();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  storeData();
}

function storeData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function resetForm() {
  formData.email = '';
  formData.message = '';

  formEl.reset();
}
