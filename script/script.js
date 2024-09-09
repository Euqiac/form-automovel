// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // Aqui você pode adicionar a lógica para enviar os dados do formulário
//     // para um servidor ou fazer qualquer outra ação.

//     alert('Formulário enviado com sucesso!');

//     // Limpar os campos do formulário
//     form.reset();
// });


document.getElementById("peso").addEventListener("input", mostrarValor);

function mostrarValor() {
    var peso = document.getElementById("peso").value;
    document.getElementById("peso_result").innerHTML = peso
  }


  //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range