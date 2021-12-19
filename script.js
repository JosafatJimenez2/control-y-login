document.querySelector('#btnEntrar').addEventListener('click',
IniciarSesion);

function IniciarSesion(){
    var user = admin;
    var password = admin;

    var sUser = '';
    var sPassword = '';

    var acceso = (user == sUser && password == sPassword);

    sUser = document.querySelector('#user').Value;
    sPassword = document.querySelector('#pass').Value;

    if(acceso == true){
        ingresar();
    }

    if(acceso == false){
        alert("acceso denegado")
    }
}

function Ingresar(){
    window.location.href = 'appControl/index.html';
}