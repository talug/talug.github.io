function FormContacto() {
    var str, ruta=document.Contacto, error="";
    if(ruta.inputName.value == "")
    { error += "Debe ingresar su nombre \n";}

    if(ruta.inputEmail.value == "")
    { error += "Debe ingresar su correo electronico \n";}
    if(ruta.inputEmail.value != ""){ str=ruta.inputEmail.value;
       if(!str.match(/^[\w]{1}[\w\.\-_]*@[\w]{1}[\w\-_\.]*\.[\w]{2,6}$/i)){
       error += "Formato email invalido\n"; }}
    if(ruta.inputMessage.value == "")
    { error += "Debe escribir un mensaje \n";}
    if(error!=""){ alert("Lista de Errores encontrados:\n\n"+error); return false; }
}

    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;
