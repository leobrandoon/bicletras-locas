function validateForm() {
    /* Escribe tú código aquí */

    /*var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;
    var social = document.getElementById("input-social").value;

    if (name == null || name.length == 0 || /^\s+$/.test(name) || name[0] != name[0].toUpperCase() || !name.match(/^[a-zA-Z]+$/)) {
        alert("Nombre debe comenzar con Mayuscula y solo contener Letras")
        return;
    }
    if (lastname == null || lastname.length == 0 || /^\s+$/.test(lastname) || latsname[0] != lastname[0].toUpperCase() || !lastname.match(/^[a-zA-Z]+$/)) {
        alert("ingrese su apellido");
        return;
    }

    if (email == null || email.length == 0 || /^\s+$/.test(email)) {
        alert("ingrese su enmail");
        return;
    }
    if (password == null || password.length == 0 || /^\s+$/.test(password)) {
        alert("ingrese su pass");
        return;
    }
    if (social == null || social.length == 0 || /^\s+$/.test(social)) {
        alert("ingrese su redsocial");
        return;
	}
	
}*/

    function alertar(mensaje, alem) {
        var span = document.createElement("span");
        span.innerHTML = mensaje;
        Element.parentNode.appendChild(span);
    }
    var name = document.getElementById("name");
    var lastname = ducument.getElementById("lastname");