const username = document.getElementById("name");
const password = document.getElementById("phone");

addInputEventPhone(password);


function addInputEventPhone(input) {
  var prefix = "+7";
  // обработчик события input
    input.addEventListener("input", function(event) {

    input.selectionStart = input.selectionEnd = input.value.length;
    // Проверка того, что ввели цифру
    const inputVal = event.target.value;
    var lastChar = inputVal.charAt(inputVal.length - 1);
    if (!/^\d$/.test(lastChar) || this.value.length > 18) {
      event.target.value = inputVal.slice(0, -1);
    }

    if (this.value === "") {
      input.value = prefix;
    }

    if (this.value.length < 3) {
      input.value = prefix;
    }

    if (this.value.length == 3 && !(event.inputType === "deleteContentBackward")) {
      lastChar = input.value.charAt(input.value.length - 1);
      const substring = input.value.slice(0, -1);
      input.value = substring + " (" + lastChar;
    }

    if (this.value.length == 8 && !(event.inputType === "deleteContentBackward")) {
      lastChar = input.value.charAt(input.value.length - 1);
      const substring = input.value.slice(0, -1);
      input.value = substring + ") " + lastChar;
    }

    if ((this.value.length == 13 || this.value.length == 16) && !(event.inputType === "deleteContentBackward")) {
      lastChar = input.value.charAt(input.value.length - 1);
      const substring = input.value.slice(0, -1);
      input.value = substring + " " + lastChar;
    }

    event.target.value = event.target.value.trim(); // Удаляем пробелы
    lastChar = input.value.charAt(input.value.length - 1);
    if(lastChar == ')'){
      const substring = input.value.slice(0, -1);
      input.value = substring;
    }
  });

  // обработчик события focusout
  input.addEventListener("focusout", function() {
    if (this.value.length < 3) {
      input.value = "";
    }
  });

  input.addEventListener("focus", function() {
    if (this.value === "") {
      input.value = prefix;
    }
  });
}
