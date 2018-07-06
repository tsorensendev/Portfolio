const form_id = 'contact-form';
const contactForm = $(`#${form_id}`);
const sendButton = $('#send-button');

const data = {
  'access_token': '93mt44zcoj8vftid4ucpo676'
}

onSuccess = () => console.log('Email successfully sent!')

onError = () => console.log('Failed to send email!')

sendEmail = () => {
  sendButton.val('Sending…');
  sendButton.prop('disabled', true);

  let name = $(`#${form_id} [name='name']`).val();
  let email = $(`#${form_id} [name='email']`).val();
  let subject = $(`#${form_id} [name='subject']`).val();
  let message = $(`#${form_id} [name='message']`).val();
  data['subject'] = `${subject} - From: ${name} - ${email}`;
  data['text'] = `${message}`;

  $.post('https://postmail.invotes.com/send',
    data,
    onSuccess
  ).fail(onError)
  return false;
}

sendButton.on('click', sendEmail);

contactForm.on('submit', event => {
  event.preventDefault();
})
