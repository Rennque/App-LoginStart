const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    username: "henrique",
    password: "teste",
  };

  const username = document.querySelector("#username").value,
    password = document.querySelector("#password").value,
    msgArea = document.querySelector("#msg-area");

  if (username == data.username && password == data.password) {
   window.alert("Logado")
  } else {
    window.alert("Credenciais Incorretas")
  }
});