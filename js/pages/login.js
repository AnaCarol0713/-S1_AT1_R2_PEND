const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const validacaoSenha = document.getElementById("validacaoSenha");
const idade = document.getElementById("idade");
const CPF = document.getElementById("CPF");
const msgError = document.getElementsByClassName("msgError")[0];
const form = document.getElementById("form");
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nome.addEventListener("input", (event) => {
  console.log(nome.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""));
  event.target.value = nome.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

email.addEventListener("input", (event) => {
  const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(checkEmail.test(event.target.value));
});

senha.addEventListener("input", (event) => {
  const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,}).*$/;

  console.log(regexSenha.test(event.target.value));
});

validacaoSenha.addEventListener("input", () => {
  if (validacaoSenha.value === senha.value) {
    console.log("Senha igual");
  } else {
    console.log("Senha diferente");
    msgErrorValidarSenha.textContent = "Senha inválido";
  }
});

idade.addEventListener("input", (event) => {
  let idade = event.target.value.replace(/\D/g, "");
  console.log(idade);
});

CPF.addEventListener("input", (event) => {
  const msgErrorCPF = document.getElementsByClassName("msgErrorCPF")[0];

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

function checkNome() {
  if (nome.value.length <= 3) {
    return false;
  }
  return true;
}

function checkEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    return true;
  }
  return false;
}

function checkIdade() {
  if (idade.value >= 18) {
    return true;
  }
  return false;
}

function checkValidacaoSenha() {
  return senha.value === validacaoSenha.value;
}

const createDisplayMsgError = (mensagem) => {
  msgError.textContent = mensagem;

  setTimeout(() => {
    msgError.textContent = "";
  }, 5000);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!checkNome()) {
    createDisplayMsgError("O nome precisa ter no minimo 4 caracteres");
    return;
  }

  if (senha.value !== validacaoSenha.value) {
    createDisplayMsgError("As senhas não são iguais");
    return;
  }

  const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,}).*$/;
  if (!regexSenha.test(senha.value)) {
    createDisplayMsgError(
      "Senha inválida (mín: 10 caracteres, 1 maiúscula, 1 número e 1 símbolo)",
    );
    return;
  }

  if (!checkEmail()) {
    createDisplayMsgError("Digite um e-mail válido");
    return;
  }

  if (!checkIdade()) {
    createDisplayMsgError("Você precisa ter 18 anos ou mais");
    return;
  }

  const cpfNumeros = CPF.value.replace(/\D/g, "");
  if (cpfNumeros.length !== 11) {
    createDisplayMsgError("CPF deve conter 11 dígitos");
    return;
  }

  console.log("TUDO OK!");
});
