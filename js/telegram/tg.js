
const button = document.querySelector('button[type="button"]');
const data = document.querySelector('#name');
const contact = document.querySelector('#phone');


button.addEventListener('click', function() {
  if (button.innerHTML  == "Готово") return;
  dataValue = data.value.trim()
  contactValue = contact.value.trim()
  if (!dataValue || dataValue.length === 0){
    data.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    setTimeout(function() {
      data.style.backgroundColor = '';
    }, 500);
    return;
  }

  if (!contactValue || contactValue.length < 18) {
    contact.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    setTimeout(function() {
      contact.style.backgroundColor = '';
    }, 500);
    return;
  }

  sendTgMessage(dataValue, contactValue)
  button.innerHTML  = "Готово";
});

function sendTgMessage(message, contact) {
  const token = '6041857280:AAGy7g18OX-GBQIU5CmzDeA12LeWrH7rSjw';
  const chatId = '433473911';

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const data = new FormData();
  data.append('chat_id', chatId);
  data.append('text', message + ", телефон: " + contact);

  fetch(url, {
    method: 'POST',
    body: data
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
