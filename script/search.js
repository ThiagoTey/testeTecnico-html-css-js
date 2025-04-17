function setupSearch(formId, inputId, messageId) {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const message = document.getElementById(messageId);
  
    // Envio do formulário
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const value = input.value.trim();
  
      if (value) {
        message.classList.add("block");
        message.textContent = `Você buscou por : ${value}`;
      }
    });
  
    // escondendo o input
    input.addEventListener('input', function () {
      const value = input.value.trim();
  
      if (!value) {
        message.classList.remove("block");
      }
    });
  }
//Cria o função no formulario do desktop e no formulario mobile
setupSearch("searchForm", "searchInput", "message");
setupSearch("searchFormMobile", "searchInputMobile", "messageMobile");