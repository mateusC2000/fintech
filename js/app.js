function showPassword() {
  var campoSenha = document.getElementById("password");
  if (campoSenha.type === "password") {
      campoSenha.type = "text";
  } else {
      campoSenha.type = "password";
  }
}
