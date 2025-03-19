const $formFieldFirstName = document.getElementById('form-field-name') as HTMLFormElement;
const $inputFirstName = document.getElementById('fname') as HTMLInputElement;
const $spanFirstName = document.getElementById('invalid-message-fname') as HTMLSpanElement;
//todas as consts acima estão funcionando corretamente

console.log($spanFirstName);
$spanFirstName.textContent = "TESTE";