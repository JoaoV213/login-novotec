
var usuario = "aluno@senai.com.br";
var senha = "senai0s1";
function autenticalogin(){
    let usuario_digitado = document.getElementById("nomeusuario").value;
    let senha_digitado = document.getElemenyById("senhausuario").value;

    if (usuario_digitado == usuario && senha_digitado == senha) {
       alert("Entrando no sistema!");
       window.location.href = "http://www.sp.senai.br/";
    } else {
       alert("Usuário ou senha incorretos!");
       window.location.href = "index.html";
    }
}