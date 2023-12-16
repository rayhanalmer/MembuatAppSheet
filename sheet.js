const scriptURL = 'https://script.google.com/macros/s/AKfycbx_FESk0YmL8iDulXHH0WO0pqSuRectrd9ja3pf14T6haAtWG8Ge4lzcSgvW8_f-0B5/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

