// Seleciona o formulário
const form = document.querySelector('form');

// Seleciona o botão de envio
const submitBtn = document.querySelector('#submit-btn');

// Seleciona o elemento de mensagem de sucesso
const successMsg = document.querySelector('#success-msg');

// Adiciona um listener para o envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Exibe a mensagem de sucesso
  successMsg.style.display = 'block';

  // Esconde a mensagem de sucesso após 3 segundos
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
});
