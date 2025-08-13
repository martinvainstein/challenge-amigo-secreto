const amigos = [] // Crea un array vacío para guardar los nombres.

function agregarAmigo() { // Declara la función que se ejecuta al agregar un amigo.
    document.getElementById("listaAmigos").innerHTML = ""; // Borra la lista después de sortear
    
    const nuevoAmigo = document.getElementById("amigo").value; // Obtiene el valor del input con id 'amigo'.
    if (!nuevoAmigo) { // Si el campo esta vacío.
        alert("Por favor, ingresa un nombre"); // Muestra un mensaje de alerta.
        return; // Detiene la ejecución de la función si el campo está vacío.
    }
    amigos.push(nuevoAmigo); // Agrega el nuevo nombre al array 'amigos'.
    let lista = ""; // Inicializa una variable para construir la lista de amigos.
    for (let i = 0; i < amigos.length; i++) { // Recorre el array 'amigos' con un ciclo for.
        lista += `<li>${amigos[i]}</li>`; // Crea un elemento <li> por cada amigo
    }

    document.getElementById("listaAmigos").innerHTML = `<ul>${lista}</ul>`; // Muestra la lista como <ul>
    document.getElementById("amigo").value = ""; // Limpia el input para que el usuario pueda escribir otro nombre.
}


function sortearAmigo () {
    if (amigos.length > 0) { // Verifica si el array esta vacío.
        const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un amigo al azar.
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSecreto}`; // Muestra el amigo secreto.
        document.getElementById("amigo").value = ""; // Limpia el input para que el usuario pueda escribir otro nombre.
        amigos.length = 0; // Vacía el array de amigos
    }
}





