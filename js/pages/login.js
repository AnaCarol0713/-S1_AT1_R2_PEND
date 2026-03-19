
const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const validacaoSenha = document.getElementById("validacaoSenha");
const idade = document.getElementById("idade");
const CPF = document.getElementById("CPF");
const form = document.getElementById("form");
const msgErrorNome = document.getElementsByClassName("msgErrorNome")[0];
const msgErrorEmail = document.getElementsByClassName("msgErrorEmail")[0];
const msgErrorSenha = document.getElementsByClassName("msgErrorSenha")[0];
const msgErrorValidarSenha = document.getElementsByClassName("msgErrorValidarSenha")[0];
const msgErrorIdade = document.getElementsByClassName("msgErrorIdade")[0];
const msgErrorCPF = document.getElementsByClassName("msgErrorCPF")[0];

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nome.addEventListener("input", (event) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

  console.log("Nome digitado:", event.target.value);

  console.log(regex.test(event.target.value));

  if (event.target.value.lenght < 3) {
    console.log("O nome precisa ser maior que 3 caracteres");
    console.log("o nome precisa ser Completo");
  }

  if (!regex.test(event.target.value)) {
    console.log("Nome Inválido");
    msgErrorNome.textContent = "Nome inválido"
    
  }
  setTimeout(() => {
    msgErrorNome.textContent = "";
  }, 5000);
});

email.addEventListener("input", (event) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(regexEmail.test(event.target.value));

  if (!regexEmail.test(event.target.value)) {
    console.log("E-mail inválido!");
    msgErrorEmail.textContent = "Email inválido"
  }
  setTimeout(() => {
    msgErrorEmail.textContent = "";
  }, 5000);
});

senha.addEventListener("input", (event) => {
  const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,}).*$/;

  console.log(regexSenha.test(event.target.value));

  if (!regexSenha.test(event.target.value)) {
    console.log("A senha não atende aos requisitos.");
  } else {
    console.log("A senha é válida.");
    msgErrorSenha.textContent = "Senha inválido"
  }
  setTimeout(() => {
    msgErrorSenha.textContent = "";
  }, 5000);
});

validacaoSenha.addEventListener("input", () => {
  if (validacaoSenha.value === senha.value) {
    console.log("Senha igual");
  } else {
    console.log("Senha diferente");
    msgErrorValidarSenha.textContent = "Senha inválido"
  }
  setTimeout(() => {
    msgErrorValidarSenha.textContent = "";
  }, 5000);
});

idade.addEventListener("input", (event) => {
  let idade = event.target.value.replace(/\D/g, "");
  console.log(idade);

  if (idade >= 18) {
    console.log("Login Autorizado");
  } else {
    console.log("Login negado");
    msgErrorIdade.textContent = "Você Precisa ter Mais 18 Anos"
  }
  setTimeout(() => {
    msgErrorIdade.textContent = "";
  }, 5000);
});

CPF.addEventListener("input", (event) => {
  let cpf = event.target.value.replace(/\D/g, "");

  cpf = cpf.slice(0, 11);

  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

  event.target.value = cpf;
  if (cpf.length < 11) {
    msgErrorCPF.textContent = "CPF inválido (mínimo 11 dígitos)";
  } else {
    msgErrorCPF.textContent = ""; 
  }
  setTimeout(() => {
    msgErrorCPF.textContent = "";
  }, 5000);
});

registerBtn.addEventListener("input", (event) => {
  let btn = event.target.value.replace

  
if (btn.length < 11) {
    msgErrorbtn.textContent = "Problema(s) ao registrar";
  } else {
    msgErrorbtn.textContent = ""; 
  }
  setTimeout(() => {
    msgErrorbtn.textContent = "";
  }, 5000);
})


