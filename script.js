// Função para animar elementos da página quando eles se tornam visíveis
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
  
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
        element.classList.add('animated');
      }
    });
  }
  
  // Função para validar o formulário
  function validateForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    let formIsValid = true;
  
    if (nameInput.value === '') {
      nameInput.classList.add('error');
      formIsValid = false;
    } else {
      nameInput.classList.remove('error');
    }
  
    if (emailInput.value === '') {
      emailInput.classList.add('error');
      formIsValid = false;
    } else {
      emailInput.classList.remove('error');
    }
  
    if (messageInput.value === '') {
      messageInput.classList.add('error');
      formIsValid = false;
    } else {
      messageInput.classList.remove('error');
    }
  
    if (formIsValid) {
      alert('Formulário enviado com sucesso!');
      document.querySelector('form').reset();
    }
  }
  
  // Adiciona o evento de rolagem da página para animar elementos
  window.addEventListener('scroll', animateOnScroll);
  
  // Adiciona o evento de envio para o formulário
  document.querySelector('form').addEventListener('submit', validateForm);
  
